package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.team.TeamCmdManager;
   import com.robot.app.team.TeamNoticeController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.teamInstallation.TeamInfoManager;
   import com.robot.core.teamInstallation.TeamLogo;
   import flash.display.Sprite;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HeadquartersMap extends BaseMapProcess
   {
      
      public static var teamInfo:SimpleTeamInfo;
       
      
      private var isInfoRefresh:Boolean;
      
      public function HeadquartersMap()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["computerStatusMc"].gotoAndStop(1);
         conLevel["techStatusMc"].gotoAndStop(1);
         conLevel["itemStatusMc"].gotoAndStop(1);
         conLevel["resStatusMc"].gotoAndStop(1);
         this.checkRemainItems();
         this.inactivity();
         TeamCmdManager.instance.refreshTeamInfo();
         TeamCmdManager.instance.checkRemainItems();
         TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id,this.getInfo);
         if(getDefinitionByName("com.robot.app2.control.ActivityTimeControl").getIsinTime(202))
         {
            if(!BufferRecordManager.getMyState(1495))
            {
               BufferRecordManager.setMyState(1495,true,function():void
               {
                  ModuleManager.showAppModule("TeamChangeAlertPanel");
               });
            }
         }
      }
      
      private function addEqToMap() : void
      {
         MapListenerManager.add(conLevel["LeiNuo"],function():void
         {
            ModuleManager.showAppModule("TeamBusinessSubPanel",true);
            isInfoRefresh = false;
         },"雷诺将军");
         MapListenerManager.add(conLevel["computer"],function():void
         {
            ModuleManager.showAppModule("NewTeamMain2016Panel",true);
            isInfoRefresh = false;
         },"战队核心电脑");
         MapListenerManager.add(conLevel["screen"],function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewTeamInfo2016Panel"));
            isInfoRefresh = false;
         },"战队信息");
         MapListenerManager.add(conLevel["item"],function():void
         {
            msgToSevice(function():void
            {
               ModuleManager.showAppModule("NewTeamItem2016Panel",teamInfo);
            });
         },"道具科技中心");
         MapListenerManager.add(conLevel["res"],function():void
         {
            msgToSevice(function():void
            {
               ModuleManager.showAppModule("NewTeamRes2016Panel",teamInfo);
            });
         },"战队资源中心");
         MapListenerManager.add(conLevel["tech"],function():void
         {
            msgToSevice(function():void
            {
               ModuleManager.showAppModule("NewTeamPetTech2016Panel",teamInfo);
            });
         },"精灵科技中心");
         ToolTipManager.add(conLevel["door_0"],"战队要塞");
         conLevel["mc_dismissAlert"].visible = false;
         KTool.getForeverNum(6148,function(param1:uint):void
         {
            if(param1 != 0 && SystemTimerManager.time < param1)
            {
               conLevel["mc_dismissAlert"].visible = true;
               showTime(param1 - 60 * 60 * 24 * 8,conLevel["mc_dismissAlert"]["mc_first"]);
               showTime(param1 - 60 * 60 * 24,conLevel["mc_dismissAlert"]["mc_end"]);
            }
         });
         MapListenerManager.add(conLevel["teamBoss"],function():void
         {
            msgToSevice(function():void
            {
               ModuleManager.showAppModule("WarTeamBossNewMainPanel",teamInfo);
            });
         },"战队Boss");
      }
      
      private function inactivity() : void
      {
         if(getDefinitionByName("com.robot.app2.control.ActivityTimeControl").getIsinTime(354))
         {
            conLevel["teamBoss"].visible = true;
            conLevel["LeiNuo"].visible = true;
            conLevel["a1"].visible = true;
            conLevel["a2"].visible = true;
            conLevel["s2"].visible = true;
         }
         else
         {
            conLevel["teamBoss"].visible = false;
            conLevel["LeiNuo"].visible = false;
            conLevel["a1"].visible = false;
            conLevel["a2"].visible = false;
            conLevel["s2"].visible = false;
         }
      }
      
      private function msgToSevice(param1:Function) : void
      {
         var fun:Function = param1;
         if(this.isInfoRefresh)
         {
            this.isInfoRefresh = false;
            TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id,function(param1:SimpleTeamInfo):void
            {
               teamInfo = param1;
               fun();
            });
         }
         else
         {
            fun();
         }
      }
      
      private function showTime(param1:int, param2:Sprite) : void
      {
         var _loc3_:Date = new Date(param1 * 1000);
         var _loc4_:int = _loc3_.date;
         var _loc5_:int = _loc3_.month + 1;
         var _loc6_:String = int(_loc3_.fullYear).toString();
         if(_loc4_ >= 10)
         {
            param2["num_0"].gotoAndStop(int(_loc4_ % 10) + 1);
            param2["num_1"].gotoAndStop(int(_loc4_ / 10) + 1);
         }
         else
         {
            param2["num_0"].gotoAndStop(_loc4_ + 1);
            param2["num_1"].gotoAndStop(1);
         }
         if(_loc5_ >= 10)
         {
            param2["num_2"].gotoAndStop(int(_loc5_ - 10) + 1);
            param2["num_3"].gotoAndStop(int(_loc5_ / 10) + 1);
         }
         else
         {
            param2["num_2"].gotoAndStop(_loc5_ + 1);
            param2["num_3"].gotoAndStop(1);
         }
         param2["num_4"].gotoAndStop(int(_loc6_.charAt(3)) + 1);
         param2["num_5"].gotoAndStop(int(_loc6_.charAt(2)) + 1);
         param2["num_6"].gotoAndStop(int(_loc6_.charAt(1)) + 1);
         param2["num_7"].gotoAndStop(int(_loc6_.charAt(0)) + 1);
      }
      
      private function getInfo(param1:SimpleTeamInfo) : void
      {
         teamInfo = param1;
         var _loc2_:TeamLogo = new TeamLogo();
         _loc2_.info = param1;
         _loc2_.x -= 27;
         _loc2_.y -= 42;
         _loc2_.scaleX = _loc2_.scaleY = 0.7;
         DisplayUtil.removeAllChild(conLevel["logoContainer"]);
         conLevel["logoContainer"].addChild(_loc2_);
         this.addEqToMap();
         this.updateBuildView();
         EventManager.addEventListener(TeamNoticeController.NEW_TEAM_LEVEL_UP,this.onFreshTeamInfo);
      }
      
      private function updateBuildView() : void
      {
         conLevel["computerStatusMc"].gotoAndStop(teamInfo.newTeamLevel);
         conLevel["techStatusMc"].gotoAndStop(teamInfo.techCenterLevel);
         conLevel["itemStatusMc"].gotoAndStop(teamInfo.bonusCenterLevel);
         conLevel["resStatusMc"].gotoAndStop(teamInfo.resCenterLevel);
      }
      
      private function onFreshTeamInfo(param1:DynamicEvent) : void
      {
         this.isInfoRefresh = true;
         var _loc2_:Object = param1.paramObject as Object;
         switch(_loc2_.leveltype)
         {
            case 0:
               teamInfo.newTeamLevel = _loc2_.level;
               break;
            case 1:
               teamInfo.techCenterLevel = _loc2_.level;
               break;
            case 2:
               teamInfo.bonusCenterLevel = _loc2_.level;
               break;
            case 3:
               teamInfo.resCenterLevel = _loc2_.level;
         }
         this.updateBuildView();
      }
      
      public function checkRemainItems() : void
      {
         KTool.getBitSet([19470],function(param1:Array):void
         {
            var bitSet:Array = param1;
            if(bitSet[0] == 0)
            {
               ItemManager.updateItems([1400001],function():void
               {
                  var _loc1_:uint = uint(ItemManager.getNumByID(1400001));
                  SocketConnection.send(CommandID.NEW_TEAM_GETTASK_AWARDS,1,_loc1_);
               });
            }
         });
      }
      
      public function onGotoMap() : void
      {
         SocketConnection.send(1022,86054610);
         MapManager.changeMap(MainManager.actorInfo.mapID,0,MapType.CAMP);
      }
      
      override public function destroy() : void
      {
         teamInfo = null;
         this.isInfoRefresh = false;
         ToolTipManager.remove(conLevel["door_0"]);
         EventManager.removeEventListener(TeamNoticeController.NEW_TEAM_LEVEL_UP,this.onFreshTeamInfo);
         super.destroy();
      }
   }
}
