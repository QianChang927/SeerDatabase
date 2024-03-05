package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1736
   {
      
      private static const TASK_ID:uint = 1736;
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
       
      
      public function Task1736()
      {
         super();
      }
      
      public static function initFor415(param1:BaseMapProcess) : void
      {
         _map = param1;
         checkTaskStatus();
      }
      
      private static function checkTaskStatus() : void
      {
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_415_0"),function(param1:MovieClip):void
         {
            _mc = param1;
            LevelManager.openMouseEvent();
            if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
            {
               DisplayUtil.removeForParent(LevelManager.iconLevel);
               acceptTask();
            }
            else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               DisplayUtil.removeForParent(LevelManager.iconLevel);
               checkTaskProStatus();
            }
            else
            {
               DisplayUtil.removeForParent(_mc);
               _mc = null;
               if(LevelManager.iconLevel.parent == null)
               {
                  LevelManager.root.addChildAt(LevelManager.iconLevel,3);
               }
               Task1752.initTask(_map);
               _map = null;
            }
         },"ani");
      }
      
      private static function checkTaskProStatus() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               startTask();
            }
            else if(Boolean(param1[0]) && !param1[1])
            {
               startPro1();
            }
            else if(Boolean(param1[1]) && !param1[2])
            {
               startPro2();
            }
         });
      }
      
      private static function acceptTask() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            if(!param1)
            {
               return;
            }
            SocketConnection.send(1022,86062000);
            startTask();
         });
      }
      
      private static function startTask() : void
      {
         _map.conLevel.addChild(_mc);
         AnimateManager.playMcAnimate(_mc,1,"mc1",function():void
         {
            NpcDialog.show(NPC.AERDALA,["伙伴们，又到了每年一度的月吟仪式了，月光一族的强大都源自于月光石，我们在获得超能能力的同时一定要保卫它！"],["让我们开始吸收能量吧！"],[function():void
            {
               AnimateManager.playMcAnimate(_mc,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.AERDALA,["月光石怎么了？怎么像失去能量一般，难道又是它们！"],["月影军团！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_mc,3,"mc3",function():void
                     {
                        NpcDialog.show(NPC.AERMONI,["阿尔达拉，月影军团就要来了，这次它们一定是来报仇的！还记得去年中秋一战吗？"],["当然记得，这次我们已经做好准备了！"],[function():void
                        {
                           NpcDialog.show(NPC.AERMONI,["你看天上的月亮，它们这次的攻势一定会去往年强劲许多，我们不能大意啊！"],["恩恩，月光兽誓死保卫月光石！"],[function():void
                           {
                              NpcDialog.show(NPC.AERDALA,["上次有瓦诺恩帮助我们，这次就让我们月光一族正面迎接他们吧！不管结果如何，就算只剩下我一个，我也不会放弃的！"],["恩恩，让我们俩兄弟一起战斗！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(_mc,4,"mc4",function():void
                                 {
                                    NpcDialog.show(NPC.AERZHA,["月光兽，这次我要让你们彻底从这里消失，月光石归我们月影军团所有！"],["哼…想拿走月光石，先过了我这关吧！"],[function():void
                                    {
                                       NpcDialog.show(NPC.AERZHA,["哈哈哈…你以为你能抵御我月影星阿尔扎的攻势吗？"],["不试怎么知道谁强谁弱呢！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(_mc,5,"mc5",function():void
                                          {
                                             TasksManager.complete(TASK_ID,0);
                                             SocketConnection.send(1022,86062002);
                                             startPro1();
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function startPro1() : void
      {
         if(_mc.parent == null)
         {
            _map.conLevel.addChild(_mc);
         }
         _mc.gotoAndStop(5);
         NpcDialog.show(NPC.AERDALA,["伙伴们…快点离开这里！再过不久这里就将发生一场大战，包围月光石的任务就交给我和阿尔莫尼吧！"],["这样太危险了！"],[function():void
         {
            NpcDialog.show(NPC.AERDALA,["不管怎样，绝对不能让月光石落入月影军团的手中，否则今年乃至以后所有的中秋节，就是月影军团的天下了！"],["听我的，赶快离开这里！"],[function():void
            {
               NpcDialog.show(NPC.AERMONI,["就算我们俩失败了，倒下了！不是还有你们吗？守护月光石是我们月光石的责任，无论牺牲多少，月光石必须毅力在这里！"],["明白了！我们走吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mc,6,"mc6",function():void
                  {
                     NpcDialog.show(NPC.AERZHA,["奇怪了，你们的伙伴们怎么都离开了，难道是怕了吗？我看你们还是放弃抵抗，乖乖的把月光石交给我们吧！"],["废话少说，接招吧！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130906_7"),function():void
                        {
                           NpcDialog.show(NPC.AERZHA,["瓦诺恩…月影军团的叛徒，你应该知道背叛我们的后果，别以为月光兽可以一直保护你！"],["其实我很早就想离开你们了！"],[function():void
                           {
                              NpcDialog.show(NPC.WANUOEN,["多年以来，你们一直胡作非为，这不是我要的生活，反而当我遇到月光一族后，我才知道维护和平是我的追求！"],["省省吧你！你难道忘记了你所做的一切！"],[function():void
                              {
                                 NpcDialog.show(NPC.WANUOEN,["我知道之前做了很多错事，但是从我离开月影军团的那天开始，月影军团的瓦诺恩已经死了，现在瓦诺恩只为正义、和平而战！"],["但是我们是不会放过你的！"],[function():void
                                 {
                                    TasksManager.complete(TASK_ID,1);
                                    SocketConnection.send(1022,86062003);
                                    startPro2();
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function startPro2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 21
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroyFor415() : void
      {
         if(_mc != null)
         {
            DisplayUtil.removeForParent(_mc);
         }
         if(LevelManager.iconLevel.parent == null)
         {
            LevelManager.root.addChildAt(LevelManager.iconLevel,3);
         }
         _mc = null;
         _map = null;
      }
   }
}
