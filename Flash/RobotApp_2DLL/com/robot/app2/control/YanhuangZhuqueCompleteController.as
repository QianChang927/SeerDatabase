package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.BlendMode;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class YanhuangZhuqueCompleteController
   {
      
      private static var PET_ARR:Array = [2988,2739,2880,3105,2842,3322,3174,3150,3211,3223,2787,3200,3082,3036,2959,3240,3142,3190,3170];
      
      private static const FINAL_BOSS:int = 3242;
      
      private static const TIME_VO:CronTimeVo = new CronTimeVo("*","12-14","*","*","*");
      
      private static const TIME_VO2:CronTimeVo = new CronTimeVo("*","18-20","*","*","*");
      
      private static var _petArr:Array;
      
      private static var _map:MapModel;
      
      private static var seerCircle:MovieClip;
      
      private static var buttonMC:MovieClip;
      
      private static var _coundwm:TimeCountdownComponent;
       
      
      public function YanhuangZhuqueCompleteController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         buttonMC.removeEventListener(MouseEvent.CLICK,onButton);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         DisplayUtil.removeForParent(buttonMC);
         buttonMC = null;
         DisplayUtil.removeForParent(seerCircle);
         seerCircle = null;
         _map = null;
         _coundwm.destroy();
         _coundwm = null;
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         ToolBarController.showOrHideAllUser(true);
      }
      
      public static function gotoFightMap() : void
      {
         SocketConnection.sendByQueue(43239,[7,0],function(param1:*):void
         {
            var i:int;
            var e:* = param1;
            StatManager.sendStat2014("0210朱雀完全体","进入神火迷阵地图","2017运营活动");
            i = int(Math.random() * 3);
            MapManager.changeMapWithCallback(11471 + i);
            _petArr = PET_ARR.sort(function():Boolean
            {
               return Math.random() > 0.5;
            },8);
         });
      }
      
      private static function addCountDown() : void
      {
         var date:Date = SystemTimerManager.sysBJDate;
         var time:uint = uint(SystemTimerManager.getTimeByDate(date.fullYear,date.month + 1,date.date,15));
         if(SystemTimerManager.time < time)
         {
            time -= SystemTimerManager.time;
         }
         else
         {
            time = uint(SystemTimerManager.getTimeByDate(date.fullYear,date.month + 1,date.date,21));
            time -= SystemTimerManager.time;
         }
         _coundwm = new TimeCountdownComponent(null);
         _coundwm.initialSeconds = time;
         _coundwm.start(function():void
         {
            Alarm.show("时间结束，请下次再来！",outMap);
         });
      }
      
      public static function inMap() : void
      {
         _map = MapManager.currentMap;
         KTool.getMultiValue([15384],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            var _loc3_:int = 0;
            var _loc4_:int = 0;
            while(_loc4_ < 19)
            {
               _map.controlLevel["movePoint_" + _loc4_].visible = false;
               if(KTool.getBit(param1[0],_petArr[_loc4_] + 1))
               {
                  DisplayUtil.removeForParent(_map.typeLevel["block_" + _loc4_]);
                  _map.controlLevel["pet_" + _loc4_].visible = false;
               }
               else
               {
                  loadPet(_loc4_,_map.controlLevel["pet_" + _loc4_]);
                  MapListenerManager.add(_map.controlLevel["pet_" + _loc4_],fightBoss);
                  _map.controlLevel["pet_" + _loc4_].visible = true;
                  _map.controlLevel["pet_" + _loc4_].mouseChildren = false;
                  _map.controlLevel["pet_" + _loc4_].buttonMode = true;
               }
               _loc4_++;
            }
            _map.controlLevel["movePoint_" + _loc4_].visible = false;
            if(KTool.getBit(param1[0],20))
            {
               DisplayUtil.removeForParent(_map.typeLevel["block_" + _loc4_]);
               _map.controlLevel["pet_" + _loc4_].visible = false;
            }
            else
            {
               loadPet(19,_map.controlLevel["pet_" + _loc4_]);
               MapListenerManager.add(_map.controlLevel["pet_" + _loc4_],fightBoss);
               _map.controlLevel["pet_" + _loc4_].visible = true;
               _map.controlLevel["pet_" + _loc4_].mouseChildren = false;
               _map.controlLevel["pet_" + _loc4_].buttonMode = true;
            }
            MapManager.currentMap.makeMapArray();
         });
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         _map.depthLevel.mouseChildren = false;
         _map.depthLevel.mouseEnabled = false;
         buttonMC = MapManager.currentMap.libManager.getMovieClip("buttonMC");
         buttonMC.addEventListener(MouseEvent.CLICK,onButton);
         LevelManager.appLevel.addChild(buttonMC);
         _map.topLevel["blackBg"].blendMode = BlendMode.LAYER;
         _map.topLevel["blackBg"].mouseChildren = false;
         _map.topLevel["blackBg"].mouseEnabled = false;
         _map.topLevel["blackBg"].alpha = 0.85;
         _map.topLevel["blackBg"].cacheAsBitmap = false;
         seerCircle = MapManager.currentMap.libManager.getMovieClip("LightCircle");
         seerCircle.scaleX = 2;
         seerCircle.scaleY = 2;
         seerCircle.x = MainManager.actorModel.pos.x - seerCircle.width * 0.5;
         seerCircle.y = MainManager.actorModel.pos.y - seerCircle.height * 0.5;
         seerCircle.mouseChildren = seerCircle.mouseEnabled = false;
         _map.topLevel.addChild(seerCircle);
         seerCircle.blendMode = BlendMode.ERASE;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         if(!SystemTimerManager.isActive([TIME_VO,TIME_VO2]))
         {
            Alarm.show("时间结束，请下次再来！",outMap);
         }
         else
         {
            addCountDown();
         }
      }
      
      protected static function walkHandler(param1:RobotEvent) : void
      {
         if(Boolean(seerCircle) && Boolean(MainManager.actorModel.visible))
         {
            seerCircle.x = MainManager.actorModel.pos.x - seerCircle.width * 0.5;
            seerCircle.y = MainManager.actorModel.pos.y - seerCircle.height * 0.5;
         }
      }
      
      protected static function onButton(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target)
         {
            case buttonMC["cureBtn"]:
               PetManager.cureAll();
               break;
            case buttonMC["bagBtn"]:
               PetBagControllerNew.showByBuffer();
               break;
            case buttonMC["exitBtn"]:
               Alert.show("确定要离开吗？",function():void
               {
                  outMap();
               });
         }
      }
      
      private static function fightBoss(param1:MouseEvent) : void
      {
         var i:int = 0;
         var e:MouseEvent = param1;
         i = int(e.target.name.replace("pet_",""));
         MainManager.actorModel.moveAndAction(new Point(_map.controlLevel["movePoint_" + i].x,_map.controlLevel["movePoint_" + i].y),function():void
         {
            if(i < 19)
            {
               i = _petArr[i];
            }
            FightManager.fightNoMapBoss("",9098 + i,false,true,function():void
            {
               if(!FightManager.isWin)
               {
                  Alarm.show("挑战失败了，请重新开始吧！",function():void
                  {
                     outMap();
                  });
               }
               else if(i == 19)
               {
                  Alarm.show("恭喜你通过神火迷阵！",function():void
                  {
                     _petArr.length = 0;
                     _petArr = null;
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showAppModule("YanhuangZhuqueCompleteBossPanel");
                     });
                  });
               }
            });
         });
      }
      
      private static function outMap() : void
      {
         SocketConnection.sendByQueue(43239,[7,0]);
         _petArr.length = 0;
         _petArr = null;
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("YanhuangZhuqueCompleteTaskPanel");
         });
      }
      
      protected static function loadPet(param1:int, param2:MovieClip) : void
      {
         DisplayUtil.removeAllChild(param2);
         param2.visible = true;
         var _loc3_:DisplayObject = KTool.getPetIcon(ClientConfig.getPetSwfPath(param1 == 19 ? uint(FINAL_BOSS) : uint(PET_ARR[_petArr[param1]])),90,"down",true,new Point(15,-20),"pet");
         param2.addChild(_loc3_);
      }
   }
}
