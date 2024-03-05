package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class ScrewOverController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var myTeam:uint;
      
      private static var _icon:MovieClip;
       
      
      public function ScrewOverController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.send(CommandID.ACTIVEACHIEVE,81);
      }
      
      public static function init(param1:BaseMapProcess, param2:uint) : void
      {
         _map = param1;
         myTeam = param2;
         if(myTeam == 0)
         {
            return;
         }
         if(isFinishTask)
         {
            _map.depthLevel["daidai"].visible = true;
            _map.depthLevel["daidai"].buttonMode = true;
            _map.depthLevel["daidai"].addEventListener(MouseEvent.CLICK,onClickDaidai1);
            _map.conLevel["reward"].mouseEnabled = true;
            _map.conLevel["reward"].mouseChildren = true;
         }
         else
         {
            _map.depthLevel["daidai"].visible = true;
            _map.depthLevel["daidai"].buttonMode = true;
            _map.depthLevel["daidai"].addEventListener(MouseEvent.CLICK,onClickDaidai);
         }
      }
      
      private static function onClickDaidai1(param1:Event) : void
      {
         NpcDialog.show(NPC.DAIDAI,["今年的精灵王争霸赛真是精彩啊！我已经开始期待下一届了！"],["是啊！是啊！"],[]);
      }
      
      private static function onClickDaidai(param1:Event) : void
      {
         var e:Event = param1;
         _map.depthLevel["daidai"]["excla"].visible = false;
         NpcDialog.show(NPC.DAIDAI,["一年一度的精灵王争霸赛终于要结束啦！谁会是这次争霸赛的冠军得主呢？你是来参加裂空杯争霸赛闭幕式的吗？"],["是呀！我是来参加闭幕式的！","我只是路过而已！"],[function():void
         {
            NpcDialog.show(NPC.DAIDAI,["哈，这次的精灵王争霸赛大家都表现的不错！朱雀大人表示要嘉奖大家呢！"],["真的吗？太好了！"],[function():void
            {
               if(myTeam == 1)
               {
                  team1();
               }
               else if(myTeam == 2)
               {
                  team2();
               }
               else
               {
                  team3();
               }
            }]);
         },function():void
         {
            _map.depthLevel["daidai"]["excla"].visible = true;
         }]);
      }
      
      private static function team1() : void
      {
         _map.conLevel["team1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["team1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.LYMAN,["这次我们队伍获得了第" + getRank(myTeam) + "名的成绩，多亏了大家的齐心协力的拼搏！这是对大家努力的奖励！"],["真的吗？太好了！"],[phoenixAppear]);
         });
      }
      
      private static function team2() : void
      {
         _map.conLevel["team2"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["team2"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.IRIS,["这次我们队伍获得了第" + getRank(myTeam) + "名的成绩，多亏了大家的齐心协力的拼搏！这是对大家努力的奖励！"],["真的吗？太好了！"],[phoenixAppear]);
         });
      }
      
      private static function team3() : void
      {
         _map.conLevel["team1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["team1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.LYMAN,["这次我们队伍获得了第" + getRank(myTeam) + "名的成绩，多亏了大家的齐心协力的拼搏！这是对大家努力的奖励！"],["真的吗？太好了！"],[phoenixAppear]);
         });
      }
      
      private static function phoenixAppear() : void
      {
         _map.conLevel["phoenix"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["phoenix"],1,"",function():void
         {
            NpcDialog.show(NPC.ZHUQUE,["下面，颁奖仪式正式开始！有请赛尔领奖！"],["嘻嘻，这是大家一起努力的结果！"],[function():void
            {
               _map.conLevel["arrow"].visible = true;
               isFinishTask = true;
               _map.conLevel["reward"].mouseEnabled = true;
               _map.conLevel["reward"].mouseChildren = true;
               _map.depthLevel["daidai"].removeEventListener(MouseEvent.CLICK,onClickDaidai);
               _map.depthLevel["daidai"].addEventListener(MouseEvent.CLICK,onClickDaidai1);
            }]);
         });
      }
      
      private static function get isFinishTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,367);
      }
      
      private static function set isFinishTask(param1:Boolean) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,367,param1);
      }
      
      private static function getRank(param1:uint) : uint
      {
         if(_map.conLevel["btn1"].currentFrame == param1)
         {
            return 1;
         }
         if(_map.conLevel["btn2"].currentFrame == param1)
         {
            return 2;
         }
         if(_map.conLevel["btn3"].currentFrame == param1)
         {
            return 3;
         }
         return 0;
      }
      
      public static function destroy() : void
      {
         _map.depthLevel["daidai"].removeEventListener(MouseEvent.CLICK,onClickDaidai);
         _map.depthLevel["daidai"].removeEventListener(MouseEvent.CLICK,onClickDaidai1);
         _map = null;
      }
   }
}
