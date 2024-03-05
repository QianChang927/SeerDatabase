package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BaidiGiftController extends Sprite
   {
      
      private static var _instance:com.robot.app.control.BaidiGiftController;
       
      
      private var frameNum:int;
      
      private var flag1:Boolean;
      
      private var flag2:Boolean;
      
      private var taskMc:MovieClip;
      
      public function BaidiGiftController()
      {
         super();
         this.frameNum = 0;
         addEventListener(Event.ENTER_FRAME,this.frameHandle);
      }
      
      public static function get instance() : com.robot.app.control.BaidiGiftController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.BaidiGiftController();
         }
         return _instance;
      }
      
      private function frameHandle(param1:Event) : void
      {
         var _loc2_:Date = null;
         ++this.frameNum;
         if(this.frameNum >= 30)
         {
            _loc2_ = SystemTimerManager.sysBJDate;
            if(_loc2_.month == 7 && (_loc2_.date >= 7 && _loc2_.date <= 13))
            {
               if(_loc2_.hours == 14 && _loc2_.minutes == 0 && !this.flag1)
               {
                  this.flag1 = true;
                  this.showTaskDetail();
               }
               else if(_loc2_.hours == 18 && _loc2_.minutes == 0 && !this.flag2)
               {
                  this.flag2 = true;
                  this.showTaskDetail();
               }
               else if(_loc2_.hours != 14 && _loc2_.hours != 18)
               {
                  this.flag1 = false;
                  this.flag2 = false;
               }
            }
            this.frameNum = 0;
         }
      }
      
      public function showTaskDetail() : void
      {
         if(this.taskMc)
         {
            this.taskMc.visible = true;
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getAppRes("BaidiGiftTipPanel"),function(param1:MovieClip):void
            {
               taskMc = param1;
               taskMc.x = 570;
               taskMc.y = 126.25;
               taskMc.addEventListener(MouseEvent.CLICK,clickHandle);
               LevelManager.iconLevel.addChild(taskMc);
            });
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "close":
               this.hideTaskDetail();
               break;
            case "go":
               this.hideTaskDetail();
               StatManager.sendStat2014("0807清风白帝好礼降世","点击提示面板抢抢枪",StatManager.RUN_ACT_2015);
               MapManager.changeMap(1103);
         }
      }
      
      public function hideTaskDetail() : void
      {
         if(this.taskMc)
         {
            this.taskMc.visible = false;
            this.taskMc.removeEventListener(MouseEvent.CLICK,this.clickHandle);
            if(this.taskMc.parent)
            {
               this.taskMc.parent.removeChild(this.taskMc);
            }
            this.taskMc = null;
         }
      }
   }
}
