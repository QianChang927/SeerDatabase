package com.robot.app.task.petstory.app.train
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TrainGradePanel
   {
       
      
      private const PATH:String = ClientConfig.getResPath("module/ext/app/trainGrade.swf");
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _mapId:uint;
      
      public function TrainGradePanel()
      {
         super();
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.topLevel,1,"正在加载训练等级面板");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
         else
         {
            this.showPanel();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("TrainGrade_UI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.showPanel();
      }
      
      private function showPanel() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ <= 1)
         {
            (this._mainUI["grade_" + _loc1_] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onMouseTimes);
            _loc1_++;
         }
      }
      
      private function onMouseTimes(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint((param1.currentTarget as SimpleButton).name.slice(6));
         switch(_loc2_)
         {
            case 0:
               TrainData.trainGrade = 0;
               break;
            case 1:
               TrainData.trainGrade = 1;
               break;
            default:
               TrainData.totalTimes = 0;
         }
         new TrainItemPanel();
         this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
      }
   }
}