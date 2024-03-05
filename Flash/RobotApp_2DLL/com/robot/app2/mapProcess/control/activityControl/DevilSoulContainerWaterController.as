package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DevilSoulContainerWaterController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _firstEnter:Boolean = true;
      
      private static var _timeDom:CronTimeVo = new CronTimeVo("*","16-17","29-31","5","*","2015");
      
      private static var _timeDom2:CronTimeVo = new CronTimeVo("*","16-17","1-4","6","*","2015");
       
      
      public function DevilSoulContainerWaterController()
      {
         super();
      }
      
      public static function initForMap722(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.conLevel["pamoya"],function():void
         {
            SocketConnection.send(1022,86054001);
            NpcDialog.show(NPC.PAMOYA,["阿洛比斯又魔化了，真是太让人头疼了...我知道赛尔号在寻找恶灵兽的四个魂器，这个突然出现的漩涡，或许能帮助你们找到0xff0000第二个魂器0xffffff。"],["嗯！我这就去！","转转手臂扭扭腰，我先热个身。"],[function():void
            {
               MapManager.changeMap(811);
            },null]);
         },"帕莫亚");
         MapListenerManager.add(_map.conLevel["xuanwo"],function():void
         {
            MapManager.changeMap(811);
         },"前往幽冥沙海");
      }
      
      public static function initForMap811(param1:BaseMapProcess) : void
      {
         _map = param1;
         fix();
      }
      
      private static function enter() : void
      {
         if(InActiveTime)
         {
            OgreController.isShow = true;
            _map.conLevel["act"].buttonMode = true;
            if(!BufferRecordManager.getState(MainManager.actorInfo,514))
            {
               if(_firstEnter)
               {
                  CommonUI.addYellowArrow(_map.topLevel,591,199,315);
               }
               _map.conLevel["act"].gotoAndStop(1);
               ToolTipManager.add(_map.conLevel["act"],"深海潜沙");
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,getAlarm);
            }
            else
            {
               _map.conLevel["act"].gotoAndStop(3);
               ToolTipManager.add(_map.conLevel["act"],"领取精灵");
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,getAlarm);
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPetClick);
            }
         }
         else
         {
            OgreController.isShow = false;
            ToolTipManager.add(_map.conLevel["act"],"深海潜沙");
            _map.conLevel["act"].buttonMode = true;
            _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
            _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
            _map.conLevel["act"].addEventListener(MouseEvent.CLICK,getAlarm);
         }
      }
      
      private static function getAlarm(param1:MouseEvent) : void
      {
         Alarm.show("活动时间未到！请16:00-18:00再来吧！");
      }
      
      private static function fix() : void
      {
         SocketConnection.addCmdListener(CommandID.DEVILSOULCONTAINER_WATER_GET_STATUS,onSet);
         SocketConnection.send(CommandID.DEVILSOULCONTAINER_WATER_GET_STATUS);
      }
      
      private static function onSet(param1:SocketEvent) : void
      {
         var a:uint;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.DEVILSOULCONTAINER_WATER_GET_STATUS,onSet);
         a = (e.data as ByteArray).readUnsignedInt();
         if(a == 15)
         {
            BufferRecordManager.setState(MainManager.actorInfo,514,true,function():void
            {
               enter();
            });
         }
         else
         {
            BufferRecordManager.setState(MainManager.actorInfo,514,false,function():void
            {
               enter();
            });
         }
      }
      
      private static function onPanelClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         SocketConnection.send(1022,86054002);
         ModuleManager.showModule(ClientConfig.getAppModule("DevilSoulContainerWaterMainPanel"));
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(_map.conLevel["act"],4,"mc",function():void
         {
            SocketConnection.addCmdListener(CommandID.DEVILSOULCONTAINER_WATER_GET_PET,onGetPet);
            SocketConnection.send(CommandID.DEVILSOULCONTAINER_WATER_GET_PET);
         });
      }
      
      private static function onGetPet(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.DEVILSOULCONTAINER_WATER_GET_PET,onGetPet);
         BufferRecordManager.setState(MainManager.actorInfo,514,false,function():void
         {
            _map.conLevel["act"].gotoAndStop(1);
            ToolTipManager.remove(_map.conLevel["act"]);
            ToolTipManager.add(_map.conLevel["act"],"深海潜沙");
            _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPanelClick);
            _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
         });
      }
      
      public static function playAnimateAndCatch() : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,514,true,function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
            {
               _map.conLevel["act"].gotoAndStop(3);
               CommonUI.addYellowArrow(_map.topLevel,614,344,315);
               ToolTipManager.remove(_map.conLevel["act"]);
               ToolTipManager.add(_map.conLevel["act"],"领取精灵");
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPetClick);
            });
         });
      }
      
      public static function get InActiveTime() : Boolean
      {
         if(_timeDom.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT || _timeDom2.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.DEVILSOULCONTAINER_WATER_GET_PET,onGetPet);
         _firstEnter = false;
         OgreController.isShow = true;
         if(_map)
         {
            if(MapManager.currentMap.id == 811)
            {
               ToolTipManager.remove(_map.conLevel["act"]);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,getAlarm);
               DisplayUtil.removeForParent(_map.conLevel["act"]);
               DisplayUtil.removeForParent(_map.conLevel["xuanwo"]);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["pamoya"]);
               DisplayUtil.removeForParent(_map.conLevel["xuanwo"]);
            }
            _map = null;
         }
      }
   }
}
