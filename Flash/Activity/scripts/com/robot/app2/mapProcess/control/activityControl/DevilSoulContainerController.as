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
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DevilSoulContainerController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _firstEnter:Boolean = true;
      
      private static var _timeDom1:CronTimeVo = new CronTimeVo("*","16-20","22-28","5","*");
      
      private static var _timeDom2:CronTimeVo = new CronTimeVo("*","0","22","5","*");
       
      
      public function DevilSoulContainerController()
      {
         super();
      }
      
      public static function initForMap709(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(_timeDom2.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
         {
            MapListenerManager.add(_map.conLevel["anluosi"],function():void
            {
               SocketConnection.send(1022,86053505);
               NpcDialog.show(NPC.ANLUOSI,["嘘...赛尔，这个巨大的漩涡出现在这里已经很多天了，它通往一个很奇怪的地方，那里有一座哭泣的雕像。雕像好像很需要我们的帮助，快去看看吧。这个漩涡深不可测，，要注意安全哦。"],["嗯！我这就去！","转转手臂扭扭腰，我先热个身。"],[function():void
               {
                  MapManager.changeMap(45);
               },null]);
            },"安洛斯");
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap45(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(InActiveTime)
         {
            OgreController.isShow = true;
            _map.conLevel["act"].buttonMode = true;
            if(!BufferRecordManager.getState(MainManager.actorInfo,505))
            {
               if(_firstEnter)
               {
                  CommonUI.addYellowArrow(_map.topLevel,225,94,315);
               }
               _map.conLevel["act"].gotoAndStop(1);
               ToolTipManager.add(_map.conLevel["act"],"烈焰流沙");
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
            }
            else
            {
               _map.conLevel["act"].gotoAndStop(3);
               ToolTipManager.add(_map.conLevel["act"],"领取精灵");
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPetClick);
            }
         }
         else
         {
            if(_timeDom2.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
            {
               OgreController.isShow = true;
            }
            else
            {
               OgreController.isShow = false;
            }
            ToolTipManager.add(_map.conLevel["act"],"烈焰流沙");
            _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPanelClick);
         }
      }
      
      private static function onPanelClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         SocketConnection.send(1022,86053506);
         ModuleManager.showModule(ClientConfig.getAppModule("DevilSoulContainerMainPanel"));
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(_map.conLevel["act"],4,"mc",function():void
         {
            SocketConnection.addCmdListener(CommandID.DEVILSOULCONTAINER_GET_PET,onGetPet);
            SocketConnection.send(CommandID.DEVILSOULCONTAINER_GET_PET);
         });
      }
      
      private static function onGetPet(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.DEVILSOULCONTAINER_GET_PET,onGetPet);
         BufferRecordManager.setState(MainManager.actorInfo,505,false,function():void
         {
            _map.conLevel["act"].gotoAndStop(1);
            ToolTipManager.remove(_map.conLevel["act"]);
            ToolTipManager.add(_map.conLevel["act"],"烈焰流沙");
            _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPanelClick);
            _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
         });
      }
      
      public static function playAnimateAndCatch() : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,505,true,function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,300,318,315);
               ToolTipManager.remove(_map.conLevel["act"]);
               ToolTipManager.add(_map.conLevel["act"],"领取精灵");
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onPetClick);
            });
         });
      }
      
      private static function get InActiveTime() : Boolean
      {
         if(_timeDom1.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         _firstEnter = false;
         if(_map)
         {
            if(MapManager.currentMap.id == 45)
            {
               ToolTipManager.remove(_map.conLevel["act"]);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPanelClick);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onPetClick);
               DisplayUtil.removeForParent(_map.conLevel["act"]);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["anluosi"]);
               DisplayUtil.removeForParent(_map.conLevel["xuanwo"]);
            }
            _map = null;
         }
      }
   }
}
