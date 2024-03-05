package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class UnionFightController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
      
      private static const KELISI_REGION:int = 0;
       
      
      public function UnionFightController()
      {
         super();
      }
      
      public static function initFor949(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(BufferRecordManager.getMyState(920))
         {
            SimpleButton(_map.conLevel["mcUnionFight"]["btnKelisi"]).addEventListener(MouseEvent.CLICK,onClickKelisiHandler);
         }
         else
         {
            SocketConnection.send(1022,86065323);
            KTool.hideMapAllPlayerAndMonster();
            map.conLevel["mcUnionFight"].visible = false;
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_949_0"),function(param1:MovieClip):void
            {
               taskMC = param1;
               _map.conLevel.addChild(param1);
               if(BufferRecordManager.getMyState(918))
               {
                  if(BufferRecordManager.getMyState(919))
                  {
                     taskMC.gotoAndStop(6);
                     playStep3();
                  }
                  else
                  {
                     taskMC.gotoAndStop(3);
                     playStep2();
                  }
               }
               else
               {
                  playStep1();
               }
            },"movie",3,false);
         }
      }
      
      private static function playStep1() : void
      {
         var list:Array = [];
         var offset:int = 0;
         list.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,offset + 1,"mc"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["从迷宫入口出来之后，我们一直寻找回去的路。但是始终找不到！"],["哥哥，我想回家！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["更可恶的是我们必须不停地躲避着他们的追击！"],["是谁？"]));
         list.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,offset + 2,"mc"]));
         TaskDiaLogManager.single.playStory(list,function():void
         {
            BufferRecordManager.setMyState(918,true);
            setTimeout(playStep2,200);
         });
      }
      
      private static function playStep2() : void
      {
         var list:Array = [];
         var offset:int = 0;
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["哥哥！快看，他是……他是克里斯！"],["真的！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["你居然是克里斯！你还记得我们吗？我是尤克斯！"],["当然记得！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELISI,["你们这些懦弱的、愚蠢的，没用任何理由存在在世上的魔域精灵！我刚好可以解决你们！"],["什么？"]));
         list.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,offset + 4,"mc"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["你们没事吧！看到他们在这里为非作歹，真是难以想象！我居然被他们瞒了这么久！"],["奥斯卡，我们奉命行事！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["希望你不要插手，免得回去之后不能向主人交代！"],["主人？"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["他可不是我的主人！克里斯，你为什么跟他们在一起？"],["你说什么？"]));
         list.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,offset + 5,"mc"]));
         TaskDiaLogManager.single.playStory(list,function():void
         {
            BufferRecordManager.setMyState(919,true);
            setTimeout(playStep3,200);
         });
      }
      
      private static function playStep3() : void
      {
         var list:Array = [];
         var offset:int = 0;
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["看来你们主人早有防范啊！竟然为你们加入幻影之盾。让我根本无法攻击到你们！"],["我劝你还是不要插手的好！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELISI,["让我就地解决他们！也免得您看到心里不舒服！"],["克里斯！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["0xff0000" + MainManager.actorInfo.nick + "0xffffff击败克里斯，从魔域精灵这里拿到灵兽晶石，唤醒他。他不能成为助纣为虐的打手。"],["到底发生了什么！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["来不及解释了，一切都是因为第六星系的争斗！记住，克里斯等级越高，内心的封印越容易解除！一定要快！ "],["好的！"]));
         list.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,offset + 7,"mc"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，灵兽晶石是我们的身体鲜血结晶，只有击败我们才能够有机会获得！来吧，我们迎接你的挑战！"],["得罪了，各位！"]));
         list.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，看来我们只能与魔域精灵进行对战，战斗胜利获得灵兽晶石。然后才能唤醒克里斯尘封的记忆！"],["来吧，我不怕！"]));
         TaskDiaLogManager.single.playStory(list,function():void
         {
            BufferRecordManager.setMyState(920,true);
            DisplayUtil.removeForParent(taskMC);
            KTool.showMapAllPlayerAndMonster();
            _map.conLevel["mcUnionFight"].visible = true;
            SocketConnection.send(1022,86065324);
            SimpleButton(_map.conLevel["mcUnionFight"]["btnKelisi"]).addEventListener(MouseEvent.CLICK,onClickKelisiHandler);
         });
      }
      
      private static function onClickKelisiHandler(param1:MouseEvent) : void
      {
         var fightWithKelisi:Function = null;
         var e:MouseEvent = param1;
         fightWithKelisi = function():void
         {
            KTool.getLimitNum(13028,function(param1:int):void
            {
               if(param1 < 20)
               {
                  FightManager.fightWithBoss("克里斯",KELISI_REGION);
               }
               else
               {
                  Alarm.show("每天最多可以挑战克里斯20次哦！");
               }
            });
         };
         SocketConnection.send(1022,86065334);
         NpcDialog.show(NPC.KELISI,["我们第六星系的事情，你最好还是不要插手！"],["不能让你为所欲为！","我本来就不想管！"],[fightWithKelisi]);
      }
      
      public static function destroy() : void
      {
         SimpleButton(_map.conLevel["mcUnionFight"]["btnKelisi"]).removeEventListener(MouseEvent.CLICK,onClickKelisiHandler);
         _map = null;
      }
   }
}
