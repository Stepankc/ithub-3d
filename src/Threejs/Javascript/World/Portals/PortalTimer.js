export default class PortalTimer{
  constructor() {
    this.currentPortal = null
    this.setVisibleTimer()
  }
  setCurrentPortal(value){
    this.currentPortal = value
  }
  makeTimerVisible(){
    this.visibleTimer._element.style.opacity = '1';
  }
  makeTimerInvisible(){
    this.visibleTimer._element.style.opacity = '0';
  }
  setTimerWidth(width){
    this.visibleTimer._element.style.width = `${width}%`
  }
  setVisibleTimer() {
    this.visibleTimer = {};
    this.visibleTimer._element = document.createElement('div');
    this.visibleTimer._element.style.userSelect = 'none';
    this.visibleTimer._element.style.position = 'fixed';
    this.visibleTimer._element.style.background = 'linear-gradient(to right, #12c2e9, #c471ed ,#f64f59)';
    this.visibleTimer._element.style.borderRadius = '15px';
    this.visibleTimer._element.style.border = '1px solid black';
    this.visibleTimer._element.style.top = '50px';
    this.visibleTimer._element.style.left = '50%';
    this.visibleTimer._element.style.transform = 'translate(-50%, 0)';
    this.visibleTimer._element.style.height = '15px';
    this.visibleTimer._element.style.transition = '1s';
    this.visibleTimer._element.style.opacity = '0';
    document.body.appendChild(this.visibleTimer._element);
  }
}
