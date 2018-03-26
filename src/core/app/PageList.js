import Swipe from '../gesture/Swipe';

/**
 * 列表页面基类，提供上下拉等功能
 */
class PageList extends PageBase {

  constructor(props, options) {
    super(props, options);

    this.isPullUpOpen = false;
    this.isPullDownOpen = false;
    this.isLoading = false;
  }

  componentDidMount() {
    if (!Platform.isU) {
      // H5中注册PullDown/Pullp事件
      this.getLoadingViews();
      this.initH5Callbacks();
    } else {
      // Native中PullDown/Pullp事件已在LPage中注册
    }
  }

  getLoadingViews() {
    // 当第一页内容不满一屏时，上拉触发点需要设置在document上
    // 不能设置在body上，因为body有height:100%属性，上滑导致body整体上移，底部无法监听swipe事件
    // this.containerView = document.body;
    this.containerView = document;
    this.appView = this.getAppView();
    this.pageView = this.getPageView();
    this.topLoadingView = this.getTopLoadingView();
    this.bottomLoadingView = this.getBottomLoadingView();
  }

  initH5Callbacks() {
    [{
      name: 'pullUp',
      callback: 'onPullUp',
    }, {
      name: 'pullDown',
      callback: 'onPullDown',
    }].forEach(
      (item) => {
        const name = item.name;
        const callback = item.callback;
        console.log(callback);
        if (this[callback]) {
          if (name === 'pullUp') {
            this.refreshType = '1';
          } else if (name === 'pullDown') {
            this.refreshType = '3';
          }
        }
      });

    this.addH5ScrollListener();
  }

  /**
   * 获取页面滚动状态信息
   * @return      {Object} [description]
   */
  getPageScrollPos() {
    const container = document.body;
    return {
      top: container.scrollTop,
      left: container.scrollLeft,
      height: container.clientHeight,
      width: container.clientWidth,
      pageWidth: container.scrollWidth,
      pageHeight: container.scrollHeight,
    };
  }

  /**
   * 增加页面滚动事件
   */
  addH5ScrollListener() {
    this.isLoading = false;

    // 当滚动条位于顶部时, 触发下拉操作
    if (this.refreshType === '1' || this.refreshType === '3') {
      Swipe.on(this.containerView, 'down', (dir, dist) => {
        console.log(dir, dist);
        const pos = this.getPageScrollPos();
        if (this.isPullDownOpen && pos.top <= 0 && !this.isLoading) {
          this.isLoading = true;
          if (this.onPullDown) {
            this.showTopLoading();
            this.onPullDown();
          }
        }
      }, (dir) => {
        const pos = this.getPageScrollPos();
        // 在顶部下拉时禁止默认行为，可为view加transform效果
        return dir === 'down' && pos.top <= 0;
      }, 0, 5, 500);
    }

    if (this.refreshType === '3') {
      // window.addEventListener('scroll', this.onWidnowScroll);
      Swipe.on(this.containerView, 'up', (dir, dist) => {
        console.log(dir, dist);
        const pos = this.getPageScrollPos();
        const btmHeight = pos.pageHeight - (pos.top + pos.height);
        // 当内容不满一屏时，btmHeight === 0
        if (this.isPullUpOpen && (btmHeight === 0 || btmHeight <= 10) && !this.isLoading) {
          this.isLoading = true;
          if (this.onPullUp) {
            this.showBottomLoading();
            this.onPullUp();
          }
        }
      }, (dir) => {
        const pos = this.getPageScrollPos();
        const btmHeight = pos.pageHeight - (pos.top + pos.height);
        // 在顶部下拉时禁止默认行为，可为view加transform效果
        return dir === 'up' && btmHeight <= 0;
      }, 0, 5, 500);
    }
  }

  /**
   * 移除页面滚动事件
   */
  removeScrollListener() {
    if (this.refreshType === '1' || this.refreshType === '3') {
      Swipe.off();
    }
  }

  /**
   * 页面向前跳转
   * @param {String} viewpath
   * @param {Object} options
   */
  forward(viewpath, options) {
    if (!Platform.isL) {
      this.removeScrollListener();
    }
    super.forward(viewpath, options);
  }

  /**
   * 页面向后跳转
   * @param {String} viewpath
   * @param {Object} options
   */
  back(viewpath, options) {
    if (!Platform.isL) {
      this.removeScrollListener();
    }
    super.back(viewpath, options);
  }

  /**
   * 页面跨系统跳转
   * @param       {String} viewurl 目标系统完整url
   * @param       {Object} options
   */
  jump(viewurl, options) {
    if (!Platform.isL) {
      this.removeScrollListener();
    }
    super.jump(viewurl, options);
  }

  /**
   * 在当前list顶部显示loading
   */
  showTopLoading() {
    // 可通过react state改变显示状态，但容易引起全局刷新，以及无法保存滚动条位置
    this.topLoadingView.setAttribute('style', 'display:block');
  }

  /**
   * 在当前list底部显示loading
   */
  showBottomLoading() {
    this.bottomLoadingView.setAttribute('style', 'display:block');
  }

  /**
   * 隐藏loading图标
   */
  hideRefreshLoading() {
    this.topLoadingView.setAttribute('style', 'display:none');
    this.bottomLoadingView.setAttribute('style', 'display:none');
    this.isLoading = false;
  }

  /**
   * 通知本次上下拉操作完成
   * unit: ms
   */
  endPull() {
    this.isLoading = false;
    this.hideRefreshLoading();
  }

  /**
   * 响应预处理回调
   * @description private
   */
  preResponse(options, err, data, callback) {
    super.preResponse(options, err, data, callback);
    if (!Platform.isL) {
      this.endPull();
    }
  }

  /**
   * 设置pull开关类型 '0': 关闭上下拉 '1':可下拉 '2':可上拉 '3':可上下拉
   * @param       {String}  type  开关类型
   */
  openPull(type = '0') {
    switch (type) {
      case '1':
        {
          this.isPullUpOpen = false;
          this.isPullDownOpen = true;
          break;
        }
      case '2':
        {
          this.isPullUpOpen = true;
          this.isPullDownOpen = false;
          break;
        }
      case '3':
        {
          this.isPullUpOpen = true;
          this.isPullDownOpen = true;
          break;
        }
      case '0':
      default:
        {
          this.isPullUpOpen = false;
          this.isPullDownOpen = false;
          break;
        }
    }
  }
}

export default PageList;


/*
  render() {
    let NavBar = null;

    if (this.state.navBarProps) {
      NavBar = Platform.isLU ? null : <Navbar {...this.state.navBarProps} />;
    }

    const AppStyle = { position: 'relative', minHeight: '100%', paddingTop: Platform.isLU || !this.state.navBarProps ? '0rem' : '4.4rem' };

    return (
      <section className="App" ref={(c) => { this.domAppView = c; }} style={AppStyle}>
        {NavBar}
        <PullLoading className="TopLoading" getRef={(c) => { this.domTopLoadingView = c; }} />
        <section className="Page" ref={(c) => { this.domPageView = c; }}>
          {this.props.children}
        </section>
        <PullLoading className="BottomLoading" getRef={(c) => { this.domBottomLoadingView = c; }} />
        {this.state.dialogProps ? <Dialog options={this.state.dialogProps} /> : null}
        {this.state.toastProps ? <Toast msg={this.state.toastProps} /> : null}
        {this.state.showLoading ? <Loading /> : null}
        {this.state.errorType ? <ErrorPage type={this.state.errorType} /> : null}
      </section>
    );
  }
}*/
