package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.manager.ResourceManager;
   
   public class InterstellarMusicianController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function InterstellarMusicianController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource("resource/mapAnimate/map_967_interstellar_musician.swf",function(param1:MovieClip):void
         {
            _taskMc = param1;
            _map.conLevel.addChild(param1);
            _taskMc["mc1"].buttonMode = true;
            _taskMc["mc1"].addEventListener(MouseEvent.CLICK,startPro);
         },"movie");
      }
      
      private static function startPro(param1:MouseEvent) : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         var e:MouseEvent = param1;
         _taskMc["mc1"].removeEventListener(MouseEvent.CLICK,startPro);
         KTool.showMapAllPlayerAndMonster(false);
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULUKE,["啦啦啦啦啦啦~~~"],["这……"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["谁啊！啊唱得好难听！"],["！！！！！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULUKE,["你竟然敢说我星际音乐家唱歌难听！"],["……"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIAOSAIER,["确实不怎么好听嘛！我不能违背我的良心！"],["你这个没教养的赛尔"]);
         mod5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc2"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
         {
            NpcDialog.show(NPC.BULUKE,["我今天就要教训你！"],["既然如此，那就来吧，我可不怕你！","我错了，音乐家大爷不要杀我~~"],[function():void
            {
               enterFight();
            },function():void
            {
               playSingMovie();
            }]);
         });
      }
      
      private static function enterFight() : void
      {
         var onFinishFight:Function = null;
         var onFightError:Function = null;
         onFinishFight = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
            SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,onFightError);
            if(FightManager.isWin)
            {
               NpcDialog.show(NPC.BULUKE,["哎呀，这个小赛尔好厉害！"],["哼，叫你再唱歌跑调！"],[function():void
               {
                  playSingMovie();
               }]);
            }
            else
            {
               NpcDialog.show(NPC.BULUKE,["看你还敢乱说！给我小心点，下次别让我再遇到你！"],["不行！我忍不下这口气！再战！","呜呜呜呜呜，我错了布鲁克大爷"],[function():void
               {
                  enterFight();
               },function():void
               {
                  playSingMovie();
               }]);
            }
         };
         onFightError = function(param1:SocketErrorEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
            SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,onFightError);
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,onFightError);
         FightManager.fightWithBoss("布鲁克",0);
      }
      
      private static function playSingMovie() : void
      {
         var mod:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc3"]);
         TaskDiaLogManager.single.playStory([mod],function():void
         {
            KTool.showMapAllPlayerAndMonster(true);
            _taskMc.gotoAndStop(1);
            _taskMc["mc1"].buttonMode = true;
            _taskMc["mc1"].addEventListener(MouseEvent.CLICK,startPro);
         });
      }
      
      public static function destroy() : void
      {
         if(_taskMc["mc1"])
         {
            _taskMc["mc1"].removeEventListener(MouseEvent.CLICK,startPro);
         }
         _taskMc = null;
         _map = null;
      }
   }
}
