package com.robot.app2.mapProcess.control
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearInterval;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class UpgradeBaseController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _isAutoF:Boolean = false;
      
      private static var _curFightLevel:int = 0;
      
      private static var ogres:Array = [];
      
      private static var BossID:Array = [10,11,12,1836,22,23,24,1912];
      
      private static var _bossStartID:int = 5375;
      
      private static var _canFight:Boolean = true;
      
      public static var backto1224:Boolean;
      
      private static var timeValue1:int;
       
      
      public function UpgradeBaseController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         ToolBarController.panel.visible = false;
         initFunc();
         updatePrecent();
         addBoss();
      }
      
      public static function destroy() : void
      {
         ToolBarController.panel.visible = true;
         destoryFunc();
         _map = null;
      }
      
      public static function initFunc() : void
      {
         var _loc1_:int = 0;
         _map.btnLevel["bag"].addEventListener(MouseEvent.CLICK,onBagClick);
         _map.btnLevel["deposit"].addEventListener(MouseEvent.CLICK,onDepositClick);
         _map.btnLevel["exit"].addEventListener(MouseEvent.CLICK,onExitClick);
         _map.conLevel["btnShop"].addEventListener(MouseEvent.CLICK,onClickShop);
         _map.conLevel["btnShop"].buttonMode = true;
         _map.btnLevel["mcClock"].visible = false;
         EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightEnd);
         if(MapManager.currentMap.id == 1146)
         {
            _loc1_ = 1;
            while(_loc1_ <= 6)
            {
               _map.btnLevel["XueXi_" + _loc1_].addEventListener(MouseEvent.CLICK,chooseXueXiLe);
               _map.btnLevel["XueXi_" + _loc1_].buttonMode = true;
               _loc1_++;
            }
         }
      }
      
      public static function destoryFunc() : void
      {
         var _loc1_:int = 0;
         _map.btnLevel["bag"].removeEventListener(MouseEvent.CLICK,onBagClick);
         _map.btnLevel["deposit"].removeEventListener(MouseEvent.CLICK,onDepositClick);
         _map.btnLevel["exit"].removeEventListener(MouseEvent.CLICK,onExitClick);
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightEnd);
         removeBoss();
         if(MapManager.currentMap.id == 1146)
         {
            _loc1_ = 1;
            while(_loc1_ <= 6)
            {
               _map.btnLevel["XueXi_" + _loc1_].removeEventListener(MouseEvent.CLICK,chooseXueXiLe);
               _loc1_++;
            }
         }
      }
      
      private static function onBagClick(param1:MouseEvent) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      private static function onDepositClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.isVip)
         {
            if(_canFight)
            {
               if(_isAutoF)
               {
                  stopAutoFight();
               }
               else
               {
                  startAutoFight();
               }
            }
            else
            {
               Alarm.show("请明天再来！");
            }
         }
         else
         {
            Alert.show("双倍经验自动挑战是VIP专属特权,你目前还不是VIP,是否现在就成为VIP?",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
               {
                  if(!MainManager.actorInfo.isVip)
                  {
                  }
               });
            });
         }
      }
      
      private static function onClickShop(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("UpgradeBaseSupplyPanel");
      }
      
      private static function onExitClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         KTool.getMultiValue([13111,11740],function(param1:Array):void
         {
            var str:String = null;
            var a:Array = param1;
            if(MapManager.currentMap.id == 1145)
            {
               str = (600000 - a[0] > 0 ? 600000 - a[0] : 0) + "点经验值";
            }
            else
            {
               str = (300 - a[1] > 0 ? 300 - a[1] : 0) + "点学习力";
            }
            Alert.show("亲爱的小赛尔，你今天还有" + str + "没有拿到哦！确定要离开吗?",function():void
            {
               var tmpid:int = 1147;
               if(backto1224)
               {
                  tmpid = 1224;
               }
               KTool.changeMapWithCallBack(tmpid,function():void
               {
                  ModuleManager.showAppModule("UpgradeBaseEntryPanel");
               });
            });
         });
      }
      
      private static function startAutoFight() : void
      {
         _isAutoF = true;
         _map.btnLevel["deposit"].gotoAndStop(2);
         CommonUI.setEnabled(_map.btnLevel["bag"],false,true);
         CommonUI.setEnabled(_map.btnLevel["exit"],false,true);
         AutomaticFightManager.autoBossFight = 1;
         _map.btnLevel["mcClock"].visible = true;
         _map.btnLevel["mcClock"]["mcNum"].gotoAndStop(1);
         _map.btnLevel["mcClock"]["mcNum"].gotoAndPlay(150);
         timeValue1 = setTimeout(function():void
         {
            autoFightBoss();
         },6000);
      }
      
      private static function stopAutoFight() : void
      {
         _isAutoF = false;
         _map.btnLevel["deposit"].gotoAndStop(1);
         _map.btnLevel["mcClock"]["mcNum"].gotoAndStop(1);
         _map.btnLevel["mcClock"].visible = false;
         CommonUI.setEnabled(_map.btnLevel["bag"],true,false);
         CommonUI.setEnabled(_map.btnLevel["exit"],true,false);
         AutomaticFightManager.autoBossFight = 0;
         _map.btnLevel["mcClock"].visible = false;
         clearInterval(timeValue1);
      }
      
      private static function autoFightBoss() : void
      {
         KTool.getMultiValue([13110],function(param1:Array):void
         {
            if(param1[0] <= 3)
            {
               FightManager.fightWithBoss("",param1[0] * 4 + 3 * int(Math.random()));
            }
            else
            {
               FightManager.fightWithBoss("",(param1[0] - 4) * 4 + 3 * int(Math.random()));
            }
         });
      }
      
      private static function onFightEnd(param1:*) : void
      {
         updatePrecent();
         if(_isAutoF && _canFight)
         {
            startAutoFight();
         }
      }
      
      private static function updatePrecent() : void
      {
         var precent:int = 0;
         if(MapManager.currentMap.id == 1145)
         {
            KTool.getMultiValue([13111],function(param1:Array):void
            {
               var _loc3_:int = 0;
               _canFight = true;
               precent = param1[0] / (600000 / 100);
               if(precent >= 100)
               {
                  precent = 100;
                  Alarm.show("你今日可获取的经验已经全部领完，请明天再来！");
                  _canFight = false;
               }
               _map.btnLevel["precent"].gotoAndStop(precent);
               var _loc2_:int = 1;
               while(_loc2_ <= 3)
               {
                  _loc3_ = precent % 10;
                  _map.btnLevel["num_" + _loc2_].gotoAndStop(_loc3_ + 1);
                  precent /= 10;
                  _loc2_++;
               }
               ToolTipManager.add(_map.btnLevel["tips"],"您当前获得的经验值为" + param1[0] + "，您的经验值上限为" + 600000);
            });
         }
         else if(MapManager.currentMap.id == 1146)
         {
            KTool.getMultiValue([13110],function(param1:Array):void
            {
               var _loc2_:int = 1;
               while(_loc2_ <= 6)
               {
                  _map.btnLevel["XueXi_" + _loc2_].gotoAndStop(1);
                  _loc2_++;
               }
               if(param1[0] < 4)
               {
                  param1[0] = 4;
               }
               _map.btnLevel["XueXi_" + int(param1[0] / 4)].gotoAndStop(2);
            });
            KTool.getMultiValue([11740],function(param1:Array):void
            {
               var _loc3_:int = 0;
               _canFight = true;
               precent = param1[0] / (300 / 100);
               if(precent >= 100)
               {
                  precent = 100;
                  Alarm.show("你今日可获取的学习力已经全部领完，请明天再来！");
                  _canFight = false;
               }
               _map.btnLevel["precent"].gotoAndStop(precent);
               var _loc2_:int = 1;
               while(_loc2_ <= 3)
               {
                  _loc3_ = precent % 10;
                  _map.btnLevel["num_" + _loc2_].gotoAndStop(_loc3_ + 1);
                  precent /= 10;
                  _loc2_++;
               }
               ToolTipManager.add(_map.btnLevel["tips"],"您当前获得的学习力为" + param1[0] + "，您的学习力上限为" + 300);
            });
         }
      }
      
      private static function chooseXueXiLe(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.currentTarget.name.split("_")[1]);
         KTool.getMultiValue([13110],function(param1:Array):void
         {
            var a:Array = param1;
            var level:int = a[0] % 4;
            SocketConnection.sendWithCallback(45084,function():void
            {
               updatePrecent();
               addBoss();
            },index + 1,level);
         });
      }
      
      public static function addBoss() : void
      {
         var pos:Array = null;
         removeBoss();
         ogres = [];
         pos = [new Point(350,221),new Point(611,221),new Point(350,353),new Point(611,353)];
         KTool.getMultiValue([13110],function(param1:Array):void
         {
            var _loc3_:OgreModel = null;
            var _loc4_:int = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               _loc3_ = new OgreModel(_loc2_);
               ogres.push(_loc3_);
               _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc4_ = param1[0] > 3 ? int(param1[0] % 4 + 4) : int(param1[0]);
               _loc3_.show(BossID[_loc4_],pos[_loc2_]);
               _loc2_++;
            }
         });
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         var index:int = 0;
         var event:RobotEvent = param1;
         var ogre:OgreModel = event.currentTarget as OgreModel;
         index = BossID.indexOf(ogre.id);
         if(index >= 0)
         {
            KTool.getMultiValue([13110],function(param1:Array):void
            {
               if(_canFight)
               {
                  if(param1[0] <= 3)
                  {
                     FightManager.fightWithBoss("",param1[0] * 4 + index);
                  }
                  else
                  {
                     FightManager.fightWithBoss("",(param1[0] - 4) * 4 + index - 4);
                  }
               }
               else
               {
                  Alarm.show("请明天再来！");
               }
            });
         }
      }
   }
}
