package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
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
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class GrassStoneThirdController
   {
      
      private static var _activeTime:CronTimeVo = new CronTimeVo("*","16-17","5-11","6","*","2015");
      
      private static var _map:BaseMapProcess;
      
      private static var _activeBtn:SimpleButton;
      
      private static var _petList:Array;
      
      private static var _flag:Boolean;
      
      private static var _successMv:MovieClip;
      
      private static var _index:uint;
      
      private static var onFight:Boolean;
       
      
      public function GrassStoneThirdController()
      {
         super();
      }
      
      public static function initMapFor745(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.conLevel["soul"],function():void
         {
            MapManager.changeMap(812);
         },"古藤幻沙");
         MapListenerManager.add(_map.conLevel["npc"],function():void
         {
            SocketConnection.send(1022,86054148);
            NpcDialog.show(NPC.YOUMIER,["遗失在时间之海中多年的古藤幻境再次出现了，第三个魂器一定就在那里。" + MainManager.actorInfo.formatNick + "，草灵石的命运就拜托你了。"],["嗯！我这就去！","转转手臂扭扭腰，我先热个身。"],[function():void
            {
               MapManager.changeMap(812);
            }]);
         });
      }
      
      public static function initMapFor812(param1:BaseMapProcess) : void
      {
         _map = param1;
         onFight = false;
         _activeBtn = _map.conLevel["activeBtn"];
         _successMv = _map.conLevel["successMv"];
         _petList = [_map.conLevel["pet0"],_map.conLevel["pet1"],_map.conLevel["pet2"],_map.conLevel["pet3"],_map.conLevel["pet4"]];
         if(BufferRecordManager.getState(MainManager.actorInfo,525))
         {
            initActive();
            KTool.enableMC(_petList,false);
            KTool.enableMC([_activeBtn],false);
            _successMv.gotoAndStop(4);
            _successMv.buttonMode = true;
            _successMv.addEventListener(MouseEvent.CLICK,onEndGame);
         }
         else
         {
            initActive();
         }
      }
      
      private static function initActive() : void
      {
         MapListenerManager.add(_activeBtn,onClick,"古藤幻沙草灵石");
         if(!_flag)
         {
            EventManager.addEventListener(RobotEvent.ANTI_PLUG_IN_ERROR,onFightError);
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         }
         addPetListener();
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         (_petList[_index] as MovieClip).addEventListener(MouseEvent.CLICK,onPetClick);
         (_petList[_index] as MovieClip).gotoAndStop(1);
         _flag = false;
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         _flag = false;
      }
      
      private static function addPetListener() : void
      {
         var _loc1_:int = 0;
         if(_petList)
         {
            _loc1_ = 0;
            while(_loc1_ < _petList.length)
            {
               (_petList[_loc1_] as MovieClip).buttonMode = true;
               (_petList[_loc1_] as MovieClip).addEventListener(MouseEvent.CLICK,onPetClick);
               _loc1_++;
            }
         }
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86054150);
         _index = uint((event.currentTarget as MovieClip).name.slice(-1));
         if(_petList[_index])
         {
            AnimateManager.playMcAnimate(_petList[_index],2,"mc2",function():void
            {
               if(_activeTime.isActive(SystemTimerManager.sysDate))
               {
                  KTool.enableMC(_petList,false);
                  (_petList[_index] as MovieClip).removeEventListener(MouseEvent.CLICK,onPetClick);
                  KTool.enableMC([_petList[_index]],true);
                  (_petList[_index] as MovieClip).buttonMode = true;
                  onFight = true;
                  (_petList[_index] as MovieClip).addEventListener(MouseEvent.CLICK,onFightBoss);
               }
               else
               {
                  NpcDialog.show(NPC.LVLINGER,["现在不要打扰我。如果你在0xFF0000 16:00-18:00 0xffffff的时候过来陪我捉迷藏，我就考虑把古藤幻沙送给你。"],["好，那我到时再来。"],[function():void
                  {
                     (_petList[_index] as MovieClip).gotoAndStop(1);
                  }]);
               }
            });
         }
      }
      
      private static function onFightBoss(param1:MouseEvent) : void
      {
         onFight = false;
         (_petList[_index] as MovieClip).removeEventListener(MouseEvent.CLICK,onFightBoss);
         KTool.enableMC(_petList,true);
         KTool.enableMC([_activeBtn],true);
         _flag = true;
         FightManager.fightWithBoss("绿灵儿",_index);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         ModuleManager.showModule(ClientConfig.getAppModule("GrassStoneThirdPanel"),"正在加载",activeFinish);
      }
      
      private static function activeFinish() : void
      {
         KTool.enableMC(_petList,false);
         KTool.enableMC([_activeBtn],false);
         AnimateManager.playMcAnimate(_successMv,1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["这一定就是草灵石了！太好了，第三个魂器到手了。绿脸的小精灵，跟我回赛尔号吧，赛尔号有好多好多好玩的东西哦~"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_successMv,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.SEER,["（咬牙切齿）要么忍，要么残忍！我还是…忍吧…我们已经找到你的伙伴火灵石和水灵石了，所有的赛尔都很期待一睹草灵石的风采呢~"],["（点击草灵石）"],[function():void
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,525,true);
                     _successMv.gotoAndStop(4);
                     _successMv.buttonMode = true;
                     _successMv.addEventListener(MouseEvent.CLICK,onEndGame);
                  }]);
               });
            });
         });
      }
      
      private static function onEndGame(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _successMv.removeEventListener(MouseEvent.CLICK,onEndGame);
         AnimateManager.playMcAnimate(_successMv,3,"mc3",function():void
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchangFinish);
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,621);
         });
      }
      
      private static function onExchangFinish(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchangFinish);
         PetInBagAlert.show(1504,"恭喜你获得了绿灵儿！");
         KTool.enableMC(_petList,true);
         KTool.enableMC([_activeBtn],true);
         BufferRecordManager.setState(MainManager.actorInfo,525,false);
         _successMv.gotoAndStop(1);
         if(onFight)
         {
            KTool.enableMC(_petList,false);
            KTool.enableMC([_petList[_index]],true);
         }
      }
      
      private static function removePetListener() : void
      {
         var _loc1_:int = 0;
         if(_petList)
         {
            _loc1_ = 0;
            while(_loc1_ < _petList.length)
            {
               (_petList[_loc1_] as MovieClip).removeEventListener(MouseEvent.CLICK,onPetClick);
               _loc1_++;
            }
         }
      }
      
      public static function destroy() : void
      {
         removePetListener();
         _successMv.removeEventListener(MouseEvent.CLICK,onEndGame);
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,onExchangFinish);
         (_petList[_index] as MovieClip).removeEventListener(MouseEvent.CLICK,onFightBoss);
         if(!_flag)
         {
            EventManager.removeEventListener(RobotEvent.ANTI_PLUG_IN_ERROR,onFightError);
            EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         }
         _successMv = null;
         _petList = null;
         _activeBtn = null;
         _map = null;
      }
   }
}
