package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class SptVanguardFightController
   {
      
      private static var _spt:int;
      
      private static var _tipMC:Sprite;
      
      private static var _tipCloseBtn:SimpleButton;
       
      
      public function SptVanguardFightController()
      {
         super();
      }
      
      public static function gotoMap(param1:int, param2:int) : void
      {
         var mapId:int = param1;
         var sptId:int = param2;
         MapManager.changeMapWithCallback(mapId,function():void
         {
            _spt = sptId;
            initSpt();
         });
      }
      
      private static function initSpt() : void
      {
         var _loc2_:DisplayObject = null;
         var _loc3_:int = 0;
         var _loc1_:MapModel = MapManager.currentMap;
         if(_loc1_.controlLevel.hasOwnProperty("bossMc"))
         {
            _loc2_ = _loc1_.controlLevel["bossMc"];
            addEvent(_loc2_);
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < MapManager.currentMap.controlLevel.numChildren)
            {
               _loc2_ = _loc1_.controlLevel.getChildAt(_loc3_);
               if(_loc2_.name.indexOf("bossMc_") != -1)
               {
                  addEvent(_loc2_);
               }
               _loc3_++;
            }
         }
      }
      
      private static function addEvent(param1:DisplayObject) : void
      {
         if(param1 is MovieClip)
         {
            (param1 as MovieClip).mouseChildren = false;
            (param1 as MovieClip).buttonMode = true;
         }
         param1.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onCloseTip(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(_tipMC,false);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var sptId:int;
         var event:MouseEvent = param1;
         var kelaomengdeTime:ActivityControl = new ActivityControl([new CronTimeVo("*","11-12","*","*","*"),new CronTimeVo("*","14-15","*","*","*"),new CronTimeVo("*","19-20","*","*","*")]);
         if(!kelaomengdeTime.isInActivityTime && _spt == 317)
         {
            _tipMC = MapManager.currentMap.libManager.getSprite("guizheAlarm");
            _tipCloseBtn = _tipMC["tipCloseBtn"];
            _tipCloseBtn.addEventListener(MouseEvent.CLICK,onCloseTip);
            MapManager.currentMap.topLevel.addChild(_tipMC);
            return;
         }
         sptId = 0;
         if(event.target.name == "bossMc")
         {
            sptId = _spt;
         }
         else
         {
            sptId = int(event.target.name.replace("bossMc_",""));
         }
         SocketConnection.sendByQueue(41127,[sptId,1],function(param1:SocketEvent):void
         {
            PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         ModuleManager.showAppModule("SptVanguardFightMainPanel");
         initSpt();
         checkNum();
      }
      
      private static function checkNum() : void
      {
         KTool.getMultiValue([11804],function(param1:Array):void
         {
            if(param1[0] >= 50)
            {
               Alarm.show("你每日获得的先锋队徽章已经达到上限！");
            }
         });
      }
   }
}
