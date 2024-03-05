package com.robot.app.task.taskscollection
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1752
   {
      
      private static const TASK_ID:int = 1752;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
       
      
      public function Task1752()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         _map = param1;
         checkTaskStatus();
      }
      
      private static function checkTaskStatus() : void
      {
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_457_task1752"),function(param1:MovieClip):void
         {
            LevelManager.openMouseEvent();
            _taskMC = param1;
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
               DisplayUtil.removeForParent(_taskMC);
            }
         },"movie");
      }
      
      private static function checkTaskProStatus() : void
      {
         _map.conLevel.addChild(_taskMC);
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
            startTask();
         });
      }
      
      private static function startTask() : void
      {
         _map.conLevel.addChild(_taskMC);
         TaskDiaLogManager.single.playStory(stroyLine,function():void
         {
            TasksManager.complete(TASK_ID,0);
            startPro1();
         });
      }
      
      private static function startPro1() : void
      {
         if(_taskMC.parent == null)
         {
            _map.conLevel.addChild(_taskMC);
         }
         NpcDialog.show(NPC.AERDALA,["月光一族，发挥你们最强的实力吧！用我们的生命守卫月光石！"],["大家一起上！"],[function():void
         {
            NpcDialog.show(NPC.AERMONI,["等等…相信瓦诺恩一定收到了月影军团的控制，大家千万小心别伤到他！"],["月光石请赐予我们力量吧！"],[function():void
            {
               AnimateManager.playMcAnimate(_taskMC,6,"mc6",function():void
               {
                  NpcDialog.show(NPC.AERMONI,["月光一族…无论有谁倒下了，其他人都必须勇往直前，我们绝不能让月光石落入月影军团的手中！"],["大家明白了吗？"],[function():void
                  {
                     AnimateManager.playMcAnimate(_taskMC,7,"mc7",function():void
                     {
                        NpcDialog.show(NPC.AERZHA,["看样子…你们这次是抱着必死的决心和我们一决高下，那就让你们知道对抗月影军团的下场吧！"],["阿德洛卡…阿德莱特，交给你们了！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130913_1"),function():void
                           {
                              DisplayUtil.removeForParent(LevelManager.iconLevel);
                              NpcDialog.show(NPC.AERZHA,["不好…月光一族已经暴走了，如果再继续和他们对抗下去，我们一定会吃亏的，这俩兄弟简直就是蠢货，这么简单是事都做不好！"],["还是先撤为上策！！"],[function():void
                              {
                                 NpcDialog.show(NPC.AERDALA,["月影军团，你们休想离开这里，尝尝我们月光一族的实力吧！"],["阿德莱特…阿德洛卡，快给我上！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["等等…月光一族…你们看瓦诺恩还想快不行了，他的生命气息正在慢慢减少，怎么办啊"],["什么…这是真的吗！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,1);
                                       startPro2();
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function startPro2() : void
      {
         if(_taskMC.parent == null)
         {
            _map.conLevel.addChild(_taskMC);
         }
         TaskDiaLogManager.single.playStory(stroyLine3,function():void
         {
            TasksManager.complete(TASK_ID,2);
            DisplayUtil.removeForParent(_taskMC);
            LevelManager.root.addChildAt(LevelManager.iconLevel,3);
         });
      }
      
      private static function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERDALA,["时间不多了，相信月影军团一定会卷土重来，我们要借用月光石强大的能量击败他们，并且救出瓦诺恩！"],["瓦诺恩…你等着我们哦！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,2,"mc2"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERDALA,["太好了…月光石果然神奇，月光一族正在不断吸收月光石的能量，相信再过不久我们就能成功了！！"],["加油吧！月光一族！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,3,"mc3"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ADELAITE,["哼哼…月光石的能量不是你们所能掌控的，还是让我们月影军团来掌管它吧！"],["又是你们，就知道你们不会轻易放弃的！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ADELAITE,["放弃？？这不是我们的月影军团的风格，我想你们还是乖乖的把月光石交给我们吧！别忘你你们的朋友还在我们手里呢！"],["瓦诺恩…瓦诺恩他怎么样了！！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ADELAITE,["哈哈哈…看来你们还是很惦记他，既然这样那就让你们再相聚一次吧！"],["什么！瓦诺恩也来了！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,4,"mc4"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERZHA,["月光兽，还记得我说的话吗？月影军团想要的东西没有拿不到的！"],["你们太卑鄙了！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERMONI,["月影军团你们会为自己的所作所为付出代价的，瓦诺恩的复仇会有我们月光一族来完成！"],["哼哼…有胆你就来吧！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,5,"mc5"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_];
      }
      
      private static function get stroyLine3() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,8,"mc8"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERZHA,["哼哼…他是中了我们月影军团的绝招，如果没有解药，就算是神仙下凡都救不了他！！"],["除非你们把月光石和我交换！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERMONI,["你们这群卑鄙无耻的小人…要是我们不愿意呢？"],["那就别怪我无情无义了！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERDALA,["等等…瓦诺恩是为了拯救我们才会这样，我们月光一族可不能像他们一定无情无义！"],["拯救瓦诺恩是我们的责任！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,9,"mc9"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERZHA,["哼哼…记得好好保护月光石，等到月圆之夜我们一定会来取的！ "],["我们走！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,10,"mc10"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERDALA,["瓦诺恩，你可一定要坚持啊！ "],["我们月光一族一定要守护他！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERMONI,["月光一族，今年我们遇到的挑战比往年要大的多，大家一定要齐心协力，我相信奇迹一定会发生的！！"],["月光一族…加油！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,11,"mc11"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我一定要召唤更多的伙伴来帮助月光一族，另外中秋圆月之夜，我们一定要阻止月影军团的进攻！ ！"],["必须守卫月光石！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMC,12,"mc12"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AERMONI,[MainManager.actorInfo.formatNick + "我的伙伴…希望你能帮助我们度过这个难关，月光一族会永远感激你的！"],["放心吧！我一定会来的！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20130913_2"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_];
      }
      
      public static function destory() : void
      {
         DisplayUtil.removeForParent(_taskMC);
         _taskMC = null;
         if(LevelManager.iconLevel.parent == null)
         {
            LevelManager.root.addChildAt(LevelManager.iconLevel,3);
         }
      }
   }
}
