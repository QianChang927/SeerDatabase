package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.systems.iconLevel.IconView;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class NewSeerIconController
   {
      
      private static var _instance:com.robot.app2.control.NewSeerIconController;
       
      
      private var newseerfiveDay:MovieClip;
      
      private var newserSevenDay:MovieClip;
      
      private var unionBtn:MovieClip;
      
      private var taskIcon:MovieClip;
      
      public function NewSeerIconController()
      {
         super();
         if(Boolean(NewSeerTaskController.isNewSeer) && !NewSeerTaskController.isNewSeerTaskADone2016)
         {
            this.init(true);
            EventManager.addEventListener(NewSeerController2016.GET_FIVEDAY_GIFT,this.playefffive);
            EventManager.addEventListener(NewSeerController2016.GET_SEVENDAY_GIFT,this.playeffseven);
            EventManager.addEventListener(NewSeerController2016.NEWSEER_TASKA_OVER,this.taskAOver);
            EventManager.addEventListener(NewSeerController2016.NEXT_STEP,this.nextStep);
            EventManager.addEventListener(NewSeerController2016.NEWSEERTASKB_OVER,this.taskBover);
            EventManager.addEventListener(NewSeerController2016.ZHAOJILING_OVER,this.hideTaskIcon);
         }
         else
         {
            this.init(true);
            EventManager.addEventListener(NewSeerController2016.NEWSEERTASKB_OVER,this.taskBover);
            EventManager.addEventListener(NewSeerController2016.ZHAOJILING_OVER,this.hideTaskIcon);
            EventManager.addEventListener(NewSeerController2016.GET_SEVENDAY_GIFT,this.playeffseven);
         }
      }
      
      public static function get instance() : com.robot.app2.control.NewSeerIconController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.NewSeerIconController();
         }
         return _instance;
      }
      
      private function taskBover(param1:Event) : void
      {
         if(this.unionBtn)
         {
            if(this.unionBtn.parent)
            {
               this.unionBtn.parent.removeChild(this.unionBtn);
            }
            this.unionBtn = null;
         }
         this.init();
      }
      
      private function nextStep(param1:Event) : void
      {
         this.init();
      }
      
      private function hideTaskIcon(param1:Event) : void
      {
         if(this.taskIcon)
         {
            if(this.taskIcon.parent)
            {
               this.taskIcon.parent.removeChild(this.taskIcon);
            }
            this.taskIcon = null;
         }
      }
      
      private function taskAOver(param1:Event) : void
      {
         this.init();
      }
      
      private function loadicon(param1:String, param2:Number, param3:Number) : void
      {
         var url:String = param1;
         var x:Number = param2;
         var y:Number = param3;
         ResourceManager.getResource(ClientConfig.getUiIcon(url),function(param1:MovieClip):void
         {
            if(url == "newseerfiveDay")
            {
               newseerfiveDay = param1;
               newseerfiveDay["eff"].mouseChildren = newseerfiveDay["eff"].mouseEnabled = false;
               newseerfiveDay.x = x;
               newseerfiveDay.y = y;
               LevelManager.iconLevel.addChild(newseerfiveDay);
               newseerfiveDay.addEventListener(MouseEvent.CLICK,clickHandle);
            }
            else if(url == "newserSevenDay")
            {
               newserSevenDay = param1;
               newserSevenDay["eff"].mouseChildren = newserSevenDay["eff"].mouseEnabled = false;
               newserSevenDay.x = x;
               newserSevenDay.y = y;
               newserSevenDay.addEventListener(MouseEvent.CLICK,clickHandle);
               LevelManager.iconLevel.addChild(newserSevenDay);
            }
            else if(url == "newseerunion")
            {
               unionBtn = param1;
               unionBtn.x = x;
               unionBtn.y = y;
               unionBtn.addEventListener(MouseEvent.CLICK,clickHandle);
               LevelManager.iconLevel.addChild(unionBtn);
               LevelManager.iconLevel.setChildIndex(unionBtn,0);
            }
            else if(url == "newseerTaskIcon")
            {
               taskIcon = param1;
               taskIcon.x = x;
               taskIcon.y = y;
               taskIcon.addEventListener(MouseEvent.CLICK,clickHandle);
               LevelManager.iconLevel.addChild(taskIcon);
               LevelManager.iconLevel.setChildIndex(taskIcon,0);
            }
         },url);
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var icon:MovieClip = e.currentTarget as MovieClip;
         switch(icon)
         {
            case this.newseerfiveDay:
               ModuleManager.showModule(ClientConfig.getAppModule("SendSpiritePanel"));
               break;
            case this.newserSevenDay:
               ModuleManager.showModule(ClientConfig.getAppModule("GetNewseerGiftPanel"));
               break;
            case this.unionBtn:
               KTool.changeMapWithCallBack(1224,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("GodofwarAllianceEvoPanel"));
               });
               break;
            case this.taskIcon:
               KTool.getMultiValue([8548],function(param1:Array):void
               {
                  if(param1[0] >= 15)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("NewSeerEndPanel"));
                  }
                  else
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("SeerSummonDailyTaskPanel"));
                  }
               });
         }
      }
      
      private function playefffive(param1:Event) : void
      {
      }
      
      private function playeffseven(param1:Event) : void
      {
         var e:Event = param1;
         if(this.newserSevenDay)
         {
            if(this.newserSevenDay.parent)
            {
               this.newserSevenDay.parent.removeChild(this.newserSevenDay);
            }
         }
         if(NewSeerTaskController.isNewSeer2016)
         {
            NewSeerController2016.getinstance().refreshShowIcon();
            IconController.eachIcon(function(param1:IconView):void
            {
               IconController.hideIcon(param1.url);
               IconController.showIcon(param1.url);
            });
            IconController.showIcon("newserSevenDay");
         }
         else
         {
            IconController.eachIcon(function(param1:IconView):void
            {
               IconController.hideIcon(param1.url);
               IconController.showIcon(param1.url);
            });
            IconController.showIcon("newserSevenDay");
         }
      }
      
      private function init(param1:Boolean = false) : void
      {
         var boo:Boolean = param1;
         if(NewSeerTaskController.isNewSeerTaskADone2016)
         {
            KTool.getMultiValue([8535,2894,15860,8537,8536],function(param1:Array):void
            {
               var _loc2_:Number = NaN;
               var _loc3_:Number = NaN;
               var _loc4_:Number = NaN;
               var _loc5_:Number = NaN;
               _loc2_ = 403.45;
               _loc3_ = 378;
               _loc4_ = 503.95 - 55;
               _loc5_ = 378;
               if(param1[4] < 7 && param1[1] < 7 && KTool.getBit(param1[2],2) < 1 && param1[3] >= 14)
               {
                  if(newserSevenDay == null)
                  {
                     loadicon("newserSevenDay",_loc4_,_loc5_);
                  }
               }
            });
            if(!NewSeerTaskController.isNewSeerTaskBDone2016 && Boolean(NewSeerTaskController.isNewSeerTaskADone2016))
            {
               KTool.getBitSet([17776],function(param1:Array):void
               {
                  if(param1[0] == 0)
                  {
                     if(unionBtn == null)
                     {
                     }
                  }
               });
            }
         }
         KTool.getBitSet([17776],function(param1:Array):void
         {
            var taskover:Boolean = false;
            var arr:Array = param1;
            if(!NewSeerTaskController.isNewVersionSeer2016 && !NewSeerTaskController.isNewSeer || Boolean(NewSeerTaskController.isNewVersionSeer2016) && arr[0] == 1 && Boolean(NewSeerTaskController.isNewSeerTaskADone2016) || Boolean(NewSeerTaskController.isNewVersionSeer2016) && Boolean(NewSeerTaskController.isNewSeerTaskBDone2016))
            {
               taskover = false;
               KTool.getMultiValue([8549],function(param1:Array):void
               {
                  if(KTool.getBit(param1[0],4) > 0)
                  {
                     taskover = true;
                  }
                  else
                  {
                     taskover = false;
                  }
                  if(!taskover)
                  {
                     if(taskIcon == null)
                     {
                     }
                  }
               });
            }
         });
      }
   }
}
