package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SilverWingArmyWelfareAController
   {
      
      private static var _currentProcess:int;
      
      private static var _currentIndex:int;
      
      private static var _currentMap:MapModel;
      
      private static var _bossWin:Array = [];
      
      private static var _bossMc:MovieClip;
       
      
      public function SilverWingArmyWelfareAController()
      {
         super();
      }
      
      public static function startTask() : void
      {
         _currentProcess = 0;
         SocketConnection.sendByQueue(43170,[1,0],function(param1:SocketEvent):void
         {
            gotoNextMap();
         });
      }
      
      private static function gotoNextMap() : void
      {
         if(_currentMap != null && _currentMap.depthLevel != null)
         {
            destroy();
         }
         _bossWin = [false,false,false,false,false,false];
         MapManager.changeMapWithCallback(11206 + _currentProcess,onMapSwitchCom);
      }
      
      private static function send() : void
      {
         SocketConnection.sendByQueue(43170,[2,_currentProcess + 1],function(param1:SocketEvent):void
         {
            gotoNextMap();
         });
      }
      
      private static function updataBoss() : void
      {
         KTool.getPlayerInfo([648,649,650],function(param1:Array):void
         {
            var _loc2_:Array = null;
            var _loc3_:Array = null;
            var _loc4_:int = 0;
            if(param1[0] == 1)
            {
               _loc2_ = KTool.intTo4byte(param1[1]);
               _loc3_ = KTool.intTo4byte(param1[2]);
               _loc2_.push(_loc3_[0]);
               _loc2_.push(_loc3_[1]);
               _loc4_ = 0;
               while(_loc4_ < 6)
               {
                  _bossMc["boss_" + _loc4_].visible = true;
                  if(_loc2_[_loc4_] == 3 || _loc2_[_loc4_] == 0)
                  {
                     (_bossMc["boss_" + _loc4_] as MovieClip).stop();
                     _bossMc["boss_" + _loc4_].visible = false;
                     _bossWin[_loc4_] = true;
                  }
                  else if(_loc2_[_loc4_] < 3)
                  {
                     (_bossMc["boss_" + _loc4_] as MovieClip).gotoAndStop(_loc2_[_loc4_]);
                  }
                  else if(_loc2_[_loc4_] > 3)
                  {
                     (_bossMc["boss_" + _loc4_] as MovieClip).gotoAndStop(_loc2_[_loc4_] - 1);
                  }
                  if(_loc2_[_loc4_] == 1 || _loc2_[_loc4_] == 2)
                  {
                     _bossWin[_loc4_] = true;
                  }
                  _bossMc["boss_" + _loc4_].addEventListener(MouseEvent.CLICK,onMapClick);
                  _currentMap.depthLevel.addChild(_bossMc["boss_" + _loc4_]);
                  _loc4_++;
               }
               _bossMc["goBtn"].addEventListener(MouseEvent.CLICK,clickGoBtn);
               _currentMap.depthLevel.addChild(_bossMc["goBtn"]);
               if(_bossWin.indexOf(false) == -1 && _currentMap.id != 11210)
               {
                  CommonUI.addYellowArrow(_currentMap.depthLevel,708,211,-120);
               }
               _currentMap.topLevel["levelTxt"].text = "击败场景中的所有敌人，即可进入下一片区域！\n行动进度：" + (_currentProcess + 1) + "/5";
            }
         });
      }
      
      private static function onMapSwitchCom() : void
      {
         initMap();
      }
      
      private static function loadingBoss(param1:Function) : void
      {
         var func:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("SilverWingArmyWelfareA"),function(param1:MovieClip):void
         {
            _bossMc = param1;
            func();
         });
      }
      
      private static function onTopClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你确定要提前结束本次行动吗？",function():void
         {
            SocketConnection.sendByQueue(43170,[4,0],function(param1:SocketEvent):void
            {
               goOutMap();
            });
         });
      }
      
      public static function goOutMap() : void
      {
         destroy();
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("SilverWingArmyWelfareAMainPanel");
         });
      }
      
      private static function onMapClick(param1:MouseEvent) : void
      {
         var bossMc:MovieClip = null;
         var e:MouseEvent = param1;
         if(_currentMap.id == 11210)
         {
            SocketConnection.sendByQueue(43170,[3,1],function(param1:SocketEvent):void
            {
               ModuleManager.showAppModule("SilverWingArmyWelfareNpcPanel",10);
            });
            return;
         }
         if(e.target is SimpleButton)
         {
            bossMc = e.target.parent as MovieClip;
         }
         else
         {
            bossMc = e.target as MovieClip;
         }
         _currentIndex = int(bossMc.name.replace("boss_",""));
         if(bossMc.currentFrame == 1)
         {
            NpcDialogNew_1._HasDanmu = false;
            NpcDialogNew_1.show(NPC.KUN_GE,["救救我，请你放我出来！"],["我这就放你出来！"],[checkDialog]);
            return;
         }
         SocketConnection.sendByQueue(43170,[3,_currentIndex + 1],function(param1:SocketEvent):void
         {
            if(bossMc.currentFrame > 2)
            {
               ModuleManager.showAppModule("SilverWingArmyWelfareNpcPanel",bossMc.currentFrame - 2);
            }
            else if(bossMc.currentFrame == 2)
            {
               ModuleManager.showAppModule("SilverWingArmyWelfareNpcPanel",9);
            }
         });
      }
      
      private static function checkDialog() : void
      {
         if(_bossWin.indexOf(false) != -1 && _bossWin.indexOf(false) != _currentIndex)
         {
            NpcDialogNew_1.show(NPC.SEER,["这里有很多敌人，现在还不能放你出来，容我将场景里的敌人全部消灭！"],["我等你！"]);
         }
         else
         {
            BonusController.addDelay(1877);
            SocketConnection.sendByQueue(43170,[3,_currentIndex + 1],function(param1:SocketEvent):void
            {
               showAnimate();
            });
         }
      }
      
      private static function showAnimate() : void
      {
         AnimateManager.playMcAnimate(_currentMap.depthLevel.getChildByName("boss_" + _currentIndex) as MovieClip,12,"mc",function():void
         {
            NpcDialogNew_1.show(NPC.KUN_GE,["谢谢你！我身上只剩这些东西了，全部送给你！"],null,null,false,function():void
            {
               BonusController.showDelayBonus(1877);
               _currentMap.depthLevel.getChildByName("boss_" + _currentIndex).visible = false;
               _bossWin[_currentIndex] = true;
            });
         });
      }
      
      private static function clickGoBtn(param1:MouseEvent) : void
      {
         if(_bossWin.indexOf(false) != -1)
         {
            Alarm.show("击败场景中的所有敌人，即可进入下一片区域！");
         }
         else
         {
            ++_currentProcess;
            if(_currentProcess > 4)
            {
               _currentProcess = 4;
            }
            StatManager.sendStat2014("0415奇袭魔域古道","进入关卡第" + (_currentProcess + 1) + "关","2016运营活动");
            send();
         }
      }
      
      public static function skipBoss() : void
      {
         var arg:int = _currentProcess < 4 ? _currentIndex + 1 : 7;
         SocketConnection.sendByQueue(43170,[6,arg],function(param1:SocketEvent):void
         {
            if(_currentProcess < 4)
            {
               updataBoss();
            }
            else
            {
               goOutMap();
            }
         });
      }
      
      public static function initMap() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         _currentMap = MapManager.currentMap;
         loadingBoss(_currentMap.id == 11210 ? addEventListen : updataBoss);
         _currentMap.btnLevel.addEventListener(MouseEvent.CLICK,onTopClick);
      }
      
      private static function addEventListen() : void
      {
         _currentMap.depthLevel["boss"].addEventListener(MouseEvent.CLICK,onMapClick);
         if(BonusController.hasDelay(1877))
         {
            BonusController.removeDelay(1877);
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         if(_currentMap == null)
         {
            return;
         }
         if(_currentMap.id == 11210)
         {
            _currentMap.depthLevel["boss"].removeEventListener(MouseEvent.CLICK,onMapClick);
         }
         else
         {
            _loc1_ = 0;
            while(_loc1_ < 6)
            {
               _currentMap.depthLevel.getChildByName("boss_" + _loc1_).removeEventListener(MouseEvent.CLICK,onMapClick);
               _loc1_++;
            }
            _currentMap.depthLevel.getChildByName("goBtn").removeEventListener(MouseEvent.CLICK,clickGoBtn);
         }
         DisplayUtil.removeAllChild(_currentMap.depthLevel);
         DisplayUtil.removeAllChild(_currentMap.btnLevel);
         _currentMap.btnLevel.removeEventListener(MouseEvent.CLICK,onTopClick);
         _bossMc = null;
         _currentMap = null;
      }
   }
}
