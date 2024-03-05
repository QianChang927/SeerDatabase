package com.robot.core.ui.loading.loadingstyle
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LoadingManager;
   import com.robot.core.manager.MainManager;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BaseLoadingStyle extends EventDispatcher implements ILoadingStyle
   {
      
      private static const KEY:String = "baseLoading";
       
      
      protected var loadingMC:MovieClip;
      
      protected var parentMC:DisplayObjectContainer;
      
      protected var percent:Number;
      
      protected var isShowCloseBtn:Boolean;
      
      private var _closeBtn:InteractiveObject;
      
      public function BaseLoadingStyle(param1:DisplayObjectContainer = null, param2:Boolean = false)
      {
         super();
         this.isShowCloseBtn = param2;
         this.parentMC = param1;
         this.loadingMC = LoadingManager.getMovieClip(this.getKey());
         this._closeBtn = this.loadingMC["closeBtn"];
         this.initPosition();
         this.checkIsShowCloseBtn();
      }
      
      protected function initPosition() : void
      {
         var _loc1_:Number = NaN;
         var _loc2_:Number = NaN;
         if(this.parentMC == null)
         {
            this.parentMC = MainManager.getStage();
            _loc1_ = MainManager.getStageWidth();
            _loc2_ = MainManager.getStageHeight();
         }
         else
         {
            _loc1_ = MainManager.getStageWidth();
            _loc2_ = MainManager.getStageHeight();
         }
         if(_loc1_ == 0 && _loc2_ == 0)
         {
            _loc1_ = 960;
            _loc2_ = 560;
         }
         this.loadingMC.x = (_loc1_ - this.loadingMC.width) / 2;
         this.loadingMC.y = (_loc2_ - this.loadingMC.height) / 2;
         if(this.parentMC)
         {
            this.parentMC.addChild(this.loadingMC);
         }
      }
      
      protected function checkIsShowCloseBtn() : void
      {
         if(this._closeBtn != null)
         {
            if(this._closeBtn is Sprite)
            {
               Sprite(this._closeBtn).buttonMode = true;
            }
            this._closeBtn.visible = this.isShowCloseBtn;
            this._closeBtn.addEventListener(MouseEvent.CLICK,this.closeHandler);
         }
      }
      
      public function changePercent(param1:Number, param2:Number) : void
      {
         this.percent = Math.floor(param2 / param1 * 100);
      }
      
      private function closeHandler(param1:MouseEvent) : void
      {
         dispatchEvent(new RobotEvent(RobotEvent.CLOSE_LOADING));
      }
      
      public function show() : void
      {
         if(this.parentMC)
         {
            this.parentMC.addChild(this.loadingMC);
         }
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.LOADING_START));
      }
      
      public function close() : void
      {
         DisplayUtil.removeForParent(this.loadingMC);
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.LOADING_END));
      }
      
      public function destroy() : void
      {
         this.close();
         if(this._closeBtn != null)
         {
            this._closeBtn.removeEventListener(MouseEvent.CLICK,this.closeHandler);
            this._closeBtn = null;
         }
         this.loadingMC = null;
         this.parentMC = null;
      }
      
      public function getLoadingMC() : DisplayObject
      {
         return this.loadingMC;
      }
      
      public function getParentMC() : DisplayObjectContainer
      {
         return this.parentMC;
      }
      
      public function setIsShowCloseBtn(param1:Boolean) : void
      {
         this.isShowCloseBtn = param1;
         this.checkIsShowCloseBtn();
      }
      
      public function setTitle(param1:String) : void
      {
      }
      
      protected function getKey() : String
      {
         return KEY;
      }
   }
}
