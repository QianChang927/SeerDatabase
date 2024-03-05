package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_699;
   import com.robot.app.mapProcess.MapProcess_77;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   
   public class FatherController
   {
      
      public static const BUFFER_RECORD_NUM:int = 665;
      
      public static const BUFFER_RECORD_NUM2:int = 672;
      
      private static var _map:BaseMapProcess;
      
      private static var _isFight:Boolean;
       
      
      public function FatherController()
      {
         super();
      }
      
      public static function startPro() : void
      {
         SocketConnection.send(1022,86058591);
         TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
         {
            if(MapManager.currentMap.id == 77)
            {
               _map.depthLevel["taskFatherMc"].visible = false;
               _map.btnLevel["menBtn"].visible = true;
               KTool.showMapPlayerAndMonster();
            }
         });
      }
      
      public static function enterMap699() : void
      {
         MapManager.changeMap(699);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
         });
      }
      
      public static function playDiaTwo() : void
      {
         TaskDiaLogManager.single.playStory(getTaskArr(2),endHandler);
      }
      
      public static function endHandler() : void
      {
         if(MapManager.currentMap.id == 699)
         {
            taskMc.visible = false;
            (_map as MapProcess_699).btnLevel["btnClick"].visible = true;
            MapListenerManager.add((_map as MapProcess_699).btnLevel["btnClick"] as MovieClip,function():void
            {
               SocketConnection.send(1022,86058592);
               _attackBoss();
            });
         }
      }
      
      private static function _attackBoss() : void
      {
         NpcDialog.show(NPC.SHANGUANGMAIRUIEN,["我是次元系最勇敢的战士，没有谁能够战胜我！"],["挑战闪光迈瑞恩！","让我再准备一下！"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            _isFight = true;
            FightManager.fightWithBoss("闪光迈瑞恩",1);
         },null]);
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         (_map as MapProcess_699).btnLevel["btnClick"].visible = true;
         _isFight = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            winBossHandler();
         }
         else
         {
            MapListenerManager.add((_map as MapProcess_699).btnLevel["btnClick"] as MovieClip,function():void
            {
               _attackBoss();
            });
         }
         DebugTrace.show("挑战结束");
      }
      
      private static function winBossHandler() : void
      {
         TaskDiaLogManager.single.playStory(getTaskArr(3),function():void
         {
            BufferRecordManager.setMyState(BUFFER_RECORD_NUM2,true);
            (_map as MapProcess_699).btnLevel["btnClick"].visible = false;
            (_map as MapProcess_699).conLevel["taskFatherMc"].visible = false;
         });
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc12_:TaskMod = null;
         var _loc13_:TaskMod = null;
         var _loc14_:TaskMod = null;
         var _loc15_:TaskMod = null;
         var _loc16_:TaskMod = null;
         var _loc17_:TaskMod = null;
         var _loc18_:TaskMod = null;
         var _loc19_:TaskMod = null;
         var _loc20_:TaskMod = null;
         var _loc21_:TaskMod = null;
         var _loc22_:TaskMod = null;
         var _loc23_:TaskMod = null;
         var _loc24_:TaskMod = null;
         var _loc25_:TaskMod = null;
         var _loc26_:TaskMod = null;
         var _loc27_:TaskMod = null;
         var _loc28_:TaskMod = null;
         var _loc29_:TaskMod = null;
         var _loc30_:TaskMod = null;
         var _loc31_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["father1",true]);
               _loc4_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["对啊！不但是赛尔号4周年庆庆典，也是一年一度的父亲节，这群小家伙实在是有心了"],["太让人感动了！"],null);
               _loc6_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["咦…怎么不见闪光迈克瑞呢？之前我记得他也在寻找自己的父亲！"],["估计就快到了吧！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["father2",true]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SOLIDMAN,["船长…这家伙是来捣乱的，我们抓住他了，你来看看吧！如何处置！"],["大家别激动，先问问是什么情况！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["这…这不是迈克瑞吗？大家都沉浸在父亲节的喜悦中，你为什么要来捣乱呢？你的父亲呢？难道你没有找到他吗？"],["父亲…我没有父亲！"]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIKERUI,["所有的小伙伴都有自己的父亲，只有我没有！"],["怎么回事啊！大家先让让！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["小家伙…发生什么事情了吗？告诉我们吧！说不定我们可以帮助你哦！"],["我父亲他…不认我了！！！呜呜呜呜~~~~"]);
               _loc14_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["别伤心…孩子！慢慢说，究竟是怎么回事情啊！"],["我的父亲是一位很勇敢的战士！"]);
               _loc15_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIKERUI,["我好不容易在诺可撒斯星找到了我的父亲，但是他好像变了，变得极度无情，还说我不是他的儿子，还把我赶了出来！"],["这样啊！背后一定有问题！"]);
               _loc16_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
               _loc17_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["船长这个任务就交给我吧！我一定会帮闪光迈克瑞找回他的父亲！"],["恩恩…这件事情就交给你了！"]);
               _loc18_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIKERUI,["真的吗？你们真的愿意帮助我？太好了！我知道我父亲在哪里，你们跟我来吧！"],["大家一起帮助闪光迈克瑞寻找父亲吧！"]);
               _loc19_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
               _loc20_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIKERUI,[MainManager.actorInfo.formatNick + ",你可一定要帮我找回我的父亲啊！我不能没有爸爸！"],["放心吧！交给我了！"]);
               _loc2_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_);
               break;
            case 2:
               _loc21_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc22_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["给我老实点，这次我们一定要利用闪光迈瑞恩破坏赛尔号四周年庆典！"],["果然被船长猜中了！是海盗的阴谋！"]);
               _loc23_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你们两个蠢货，给我住手！快点放了闪光迈瑞恩，否则要你们好看！"],["又是你！可恶的赛尔！"]);
               _loc24_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["闪光迈瑞恩这里就交给你了，在你面前的是你的敌人！给我消灭他们！"],["快救救我的父亲吧！"]);
               _loc25_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc26_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIRUIEN,["父亲…我是你儿子闪光迈克瑞，你快点醒醒吧！"],["我没有儿子！"]);
               _loc27_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来这里面一定有问题，感觉闪光迈瑞恩被控制了一样！"],["闪光迈克瑞，让我来解救你父亲吧！"]);
               _loc2_ = new Array(_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_);
               break;
            case 3:
               _loc28_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIRUIEN,["我。。。。我这是怎么了。。。"],["你刚才被海盗控制了！"]);
               _loc29_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIRUIEN,["是你救了我吗？"],["恩恩，闪光迈克瑞很担心你呢。"]);
               _loc30_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIRUIEN,["真是太感谢你了！这是我的精元，就当做礼物送给你吧！"],["哇！真是太好了！"]);
               _loc31_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANGMAIRUIEN,["好了，我要去找我的孩子了。下次再见吧！"],["嗯，快去吧！"]);
               _loc2_ = new Array(_loc28_,_loc29_,_loc30_,_loc31_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         if(_map is MapProcess_699)
         {
            return _map.conLevel["taskFatherMc"];
         }
         if(_map is MapProcess_77)
         {
            return _map.depthLevel["taskFatherMc"];
         }
         return null;
      }
      
      public static function initForMap699(param1:BaseMapProcess) : void
      {
         if(Boolean(BufferRecordManager.getMyState(FatherController.BUFFER_RECORD_NUM)) && !BufferRecordManager.getMyState(FatherController.BUFFER_RECORD_NUM2))
         {
            _map = param1;
            if(!_isFight)
            {
               _map.conLevel["taskFatherMc"].visible = true;
               playDiaTwo();
            }
            else
            {
               _map.conLevel["taskFatherMc"].visible = false;
            }
         }
      }
      
      private static function _ShowDanGao() : void
      {
      }
      
      private static function _hideDanGao() : void
      {
      }
      
      public static function initForMap77(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.depthLevel["taskFatherMc"].gotoAndStop(1);
         _map.btnLevel["menBtn"].visible = false;
         MapListenerManager.add(_map.btnLevel["menBtn"] as MovieClip,function():void
         {
            enterMap699();
            BufferRecordManager.setMyState(FatherController.BUFFER_RECORD_NUM,true);
         });
         if(!BufferRecordManager.getMyState(FatherController.BUFFER_RECORD_NUM))
         {
            _map.depthLevel["taskFatherMc"].visible = true;
            _map.btnLevel["menBtn"].visible = false;
            MapListenerManager.add(_map.btnLevel["btnClick"] as MovieClip,function():void
            {
               MapListenerManager.remove(_map.btnLevel["btnClick"] as MovieClip);
               startPro();
               KTool.hideMapAllPlayerAndMonster();
               MainManager.selfVisible = true;
            });
         }
         else if(Boolean(BufferRecordManager.getMyState(FatherController.BUFFER_RECORD_NUM)) && !BufferRecordManager.getMyState(FatherController.BUFFER_RECORD_NUM2))
         {
            _map.depthLevel["taskFatherMc"].visible = false;
            _map.btnLevel["menBtn"].visible = true;
         }
         else
         {
            _map.depthLevel["taskFatherMc"].visible = false;
            _map.btnLevel["menBtn"].visible = false;
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
         TaskDiaLogManager.single.destroy();
      }
   }
}
