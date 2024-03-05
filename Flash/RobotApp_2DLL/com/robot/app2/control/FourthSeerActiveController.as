package com.robot.app2.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FourthSeerActiveController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var preTaskId:uint = 1506;
      
      private static var taskId:uint = 1534;
      
      public static var isFight:Boolean;
       
      
      public function FourthSeerActiveController()
      {
         super();
      }
      
      public static function initMap91(param1:BaseMapProcess) : void
      {
         var m:BaseMapProcess = param1;
         _taskMc = m.conLevel["taskMcDien"];
         if(TasksManager.getTaskStatus(preTaskId) == TasksManager.COMPLETE)
         {
            if(TasksManager.getTaskStatus(taskId) == TasksManager.COMPLETE)
            {
               DisplayUtil.removeForParent(_taskMc);
            }
            else if(TasksManager.getTaskStatus(taskId) == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(taskId,function(param1:Boolean):void
               {
                  SocketConnection.send(1022,86058347);
                  _taskMc.gotoAndStop(1);
                  _taskMc.buttonMode = true;
                  _taskMc.addEventListener(MouseEvent.CLICK,onStartTask);
               });
            }
            else
            {
               _taskMc.gotoAndStop(1);
               _taskMc.buttonMode = true;
               _taskMc.addEventListener(MouseEvent.CLICK,onStartTask);
            }
         }
         else
         {
            DisplayUtil.removeForParent(_taskMc);
         }
      }
      
      private static function onStartTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_taskMc,2,"mc2",function():void
         {
            NpcDialog.show(NPC.SEER,["追了半天还是跟丢了，哎…这个地方总觉得阴森森的…我们还是不要乱跑了，问问辛基德有没有什么线索吧。"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_taskMc,3,"mc3",function():void
               {
                  NpcDialog.show(NPC.PAIJI,[MainManager.actorInfo.nick + ",快看！那个黑影出现了！我们…我们是不是该躲起来…"],["好熟悉的身影…"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["我想起来了！是英卡洛斯！哈哈，不用害怕，那是我的老朋友英卡洛斯"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["英卡洛斯，你怎么会在这里？贾斯汀站长也来了吗？看来他也很牵挂迪恩，想把他找回来呢。"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_taskMc,4,"mc4",function():void
                           {
                              NpcDialog.show(NPC.SEER,["萨格拉斯！如果你在这里…那…迪恩呢？迪恩在哪里？"],null,null,false,function():void
                              {
                                 task2();
                              });
                           });
                        });
                     });
                  }]);
               });
            });
         });
      }
      
      private static function task2() : void
      {
         NpcDialog.show(NPC.PAIJI,[MainManager.actorInfo.nick + ",你认识他？哈哈，我就说，在我的帮助下，你一定能找到你的朋友的~"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["如果不是迪恩想让我找到他，萨格拉斯是不会轻易露面的…"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_taskMc,5,"mc5",function():void
               {
                  task3();
               });
            });
         });
      }
      
      private static function task3() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201306130699"),function():void
         {
            NpcDialog.show(NPC.PAIJI,["哇！好帅气的机器人~ " + MainManager.actorInfo.nick + ",这家伙长得比你帅多了呢！咦？你怎么了？哈哈，你也看呆了吧~"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_taskMc,6,"mc6",function():void
               {
                  NpcDialog.show(NPC.SEER,["你离开的这一年，我们大家都好想好想你。特别是贾斯汀站长，我们都不敢在他面前提起你…"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DIEN_20130614,["我已经…离开一年了吗？"],["现在好啦~ 走，我们一起回赛尔号吧。"],[function():void
                     {
                        NpcDialog.show(NPC.DIEN_20130614,["对不起，我不能回去。你难道看不出来吗？我已经不是原来那个迪恩了，赛尔号，我回不去了。"],["为什么？！什么叫回不去了？"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["我知道你受了很严重的伤，武器大师把你修好了。你还是原来的你。现在是四周年庆典，大家一定非常想念你。"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(_taskMc,7,"mc7",function():void
                              {
                                 NpcDialog.show(NPC.DIEN_20130614,["这个时空是赛尔历99年，海盗组织已经变得异常强大。我曾经潜入海盗组织内部，翻到了一些资料。"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.DIEN_20130614,["……如果我没有记错，赛尔历44年，赛尔号周年庆典期间，比特会率领海盗组织，再次袭击赛尔号！"],["什么？！！"],[function():void
                                    {
                                       task4();
                                    }]);
                                 });
                              });
                           });
                        }]);
                     }]);
                  });
               });
            });
         });
      }
      
      private static function task4() : void
      {
         AnimateManager.playMcAnimate(_taskMc,8,"mc8",function():void
         {
            NpcDialog.show(NPC.SAGELUOSI,["不行！你不能回去！离开这里，你会万劫不复的！不要忘了，你的身体…"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_taskMc,9,"mc9",function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201306130259"),function():void
                  {
                     TasksManager.complete(taskId,0,function(param1:Boolean):void
                     {
                        SocketConnection.send(1022,86058348);
                        if(param1)
                        {
                           MainManager.selfVisible = true;
                           ToolBarController.showOrHideAllUser(true);
                           _taskMc.visible = false;
                        }
                     });
                  },false);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_taskMc)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onStartTask);
         }
         _taskMc = null;
      }
      
      private static function init() : void
      {
      }
   }
}
