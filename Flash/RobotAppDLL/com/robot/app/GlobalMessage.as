package com.robot.app
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import gs.TweenLite;
   import gs.easing.Bounce;
   
   public class GlobalMessage
   {
      
      private static var _instance:com.robot.app.GlobalMessage;
       
      
      private var messagePanel:MovieClip;
      
      private var timer:Timer;
      
      private var closeBtn:SimpleButton;
      
      private var tween:TweenLite;
      
      public function GlobalMessage()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.GlobalMessage
      {
         if(_instance)
         {
            return _instance;
         }
         return _instance = new com.robot.app.GlobalMessage();
      }
      
      private function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var _loc3_:Class = null;
         var _loc2_:MCLoader = param1.currentTarget as MCLoader;
         _loc2_.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadSuccess);
         if(MainManager.actorInfo.superNono)
         {
            _loc3_ = param1.getApplicationDomain().getDefinition("SuperNonoMessage") as Class;
         }
         else
         {
            _loc3_ = param1.getApplicationDomain().getDefinition("NonoMessage") as Class;
         }
         this.messagePanel = new _loc3_() as MovieClip;
         this.messagePanel.x = 960 - this.messagePanel.width - 80;
         this.messagePanel.y = LevelManager.root.height;
         this.closeBtn = this.messagePanel["close_btn"];
         LevelManager.topLevel.addChild(this.messagePanel);
         TweenLite.to(this.messagePanel,2,{
            "y":560 - this.messagePanel.height - 50,
            "ease":Bounce.easeOut,
            "onComplete":this.onComp
         });
         _loc2_.clear();
      }
      
      private function onComp() : void
      {
         this.timer = new Timer(8000);
         this.timer.addEventListener(TimerEvent.TIMER,this.onTimerHandler);
         this.timer.start();
         this.messagePanel.addEventListener(MouseEvent.ROLL_OUT,this.onOutHandler);
         this.messagePanel.addEventListener(MouseEvent.ROLL_OVER,this.onOverHandler);
         this.closeBtn.addEventListener(MouseEvent.CLICK,this.onClickHandler);
      }
      
      private function onClickHandler(param1:MouseEvent) : void
      {
         this.messagePanel.visible = false;
         this.destroy();
      }
      
      private function onOutHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.tween = TweenLite.to(this.messagePanel,2,{
            "alpha":0,
            "onComplete":function():void
            {
               messagePanel.visible = false;
               destroy();
            }
         });
      }
      
      private function onOverHandler(param1:MouseEvent) : void
      {
         this.messagePanel.alpha = 1;
         if(this.timer)
         {
            this.timer.stop();
         }
         TweenLite.removeTween(this.tween);
      }
      
      private function onTimerHandler(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         this.timer.stop();
         this.timer.removeEventListener(TimerEvent.TIMER,this.onTimerHandler);
         this.timer = null;
         this.tween = TweenLite.to(this.messagePanel,2,{
            "alpha":0,
            "onComplete":function():void
            {
               messagePanel.visible = false;
               destroy();
            }
         });
      }
      
      public function setup() : void
      {
         var _loc1_:MCLoader = new MCLoader(ClientConfig.getResPath("messagepanel.swf"));
         _loc1_.addEventListener(MCLoadEvent.SUCCESS,this.onLoadSuccess);
         _loc1_.doLoad();
      }
      
      private function destroy() : void
      {
         if(this.messagePanel)
         {
            this.messagePanel.removeEventListener(MouseEvent.ROLL_OUT,this.onOutHandler);
            this.messagePanel.removeEventListener(MouseEvent.ROLL_OVER,this.onOverHandler);
            this.messagePanel = null;
         }
         if(this.timer)
         {
            this.timer.stop();
            this.timer.removeEventListener(TimerEvent.TIMER,this.onTimerHandler);
            this.timer = null;
         }
         if(_instance)
         {
            _instance = null;
         }
         this.closeBtn.removeEventListener(MouseEvent.CLICK,this.onClickHandler);
      }
   }
}
