package com.robot.app.task.taskscollection
{
   import com.robot.app.mapProcess.control.StarGuardController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.utils.DisplayUtil;
   
   public class Task771
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task771()
      {
         super();
      }
      
      public static function onTaikeClick(param1:*) : void
      {
         var e:* = param1;
         if(TasksManager.getTaskStatus(771) == TasksManager.UN_ACCEPT)
         {
            NpcDialog.show(NPC.DOCTOR,["绝版已久的神灵兽泰克再次归来啦，英勇的赛尔们这次千万不要错过哟！"],["了解神灵兽的故事","立即领取神灵兽","我再四处看看"],[showStory,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ShenLingShouChengZhangPanel"),"正在打开面板....",1);
            }]);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ShenLingShouChengZhangPanel"),"正在打开面板....",1);
         }
      }
      
      private static function showStory() : void
      {
         TasksManager.accept(771,function(param1:Boolean):void
         {
            if(param1)
            {
               startPro_0();
            }
         });
      }
      
      public static function initTaskForMap30(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(771) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(771,function(param1:Array):void
            {
               if(!param1[0])
               {
                  DisplayUtil.removeForParent(_map.conLevel["task_771"]);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  startPro_2();
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["task_771"]);
         }
      }
      
      public static function startPro_0() : void
      {
         NpcDialog.show(NPC.DOCTOR,["神灵兽！？真是大言不惭，你见过它的真面目吗？"],["这个………太让我失望了！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_771_0"),function():void
            {
               NpcDialog.show(NPC.SEER,["简直像一场梦，浪费我那么多时间，最后救出的的却是……哎，往事不堪回首啊！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["它临走前留下一封信，不知道还有没有见面的机会。仔细想想，它还是挺可爱的，HOHO！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DOCTOR,["哈哈，不必灰心丧气！也许当你重游故地，就会有意外的发现哦！"],["去赫尔卡星看看！"],[function():void
                     {
                        TasksManager.complete(771,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(30);
                           }
                        });
                     }]);
                  });
               });
            });
         }]);
      }
      
      public static function startPro_1() : void
      {
         StarGuardController.hide();
         NpcDialog.show(NPC.SEER,["哇！怎么没遇见泰克，却看见了艾利逊，真倒霉！不过他好像睡着了……………………"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task_771"],0,"",function():void
            {
               NpcDialog.show(NPC.NEW_ALLISON,["臭铁皮，有没有看到一个长的像蛋一样的东西？"],["没………有………"],[function():void
               {
                  NpcDialog.show(NPC.NEW_ALLISON,[" 如果让我知道你吹牛，嘿嘿………你懂的！"],["看来它们想围剿泰克，我该怎么办？"],[function():void
                  {
                     NpcDialog.show(NPC.NEW_ZOG,["少罗嗦，快把它抓起来，艾利逊，你什么时候和敌人也有共同话题了？！"],["是，大哥！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_771_1"),function():void
                        {
                           TasksManager.complete(771,1,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 StarGuardController.show();
                                 startPro_2();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      public static function startPro_2() : void
      {
         DisplayUtil.removeForParent(_map.conLevel["task_771"]);
         NpcDialog.show(NPC.SEER,["刚才实在太危险了，谢谢你救了我！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.TAIMIYAKE,[MainManager.actorInfo.formatNick + "，你已经忘记我了吗？"],["我们认识吗？"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_771_2"),function():void
               {
                  NpcDialog.show(NPC.SEER,["你是泰克？我们又见面了。现在这造型可酷多了，真帅气！当时还以为你在吹牛………原来你那么厉害，一出场就把海盗吓走了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.TAIMIYAKE,["当时如果不是你救我，我早就连同能量蛋一起被海盗抓走了。经过一周的历练，我的能力略有恢复！"],["历练？你这一周去哪了？"],[function():void
                     {
                        NpcDialog.show(NPC.TAIMIYAKE,["从能量蛋里急速脱离的我，还来不及充分吸收天地精华。所以我必须从SPT—BOSS身上获取这种能量，你愿意帮助我吗？"],["我该怎么做？"],[function():void
                        {
                           NpcDialog.show(NPC.TAIMIYAKE,["蘑菇怪、钢牙鲨、斯普林特、墨杜萨、肯佩德、亚伦斯、卡修斯、迪福特，只要你击败这八个BOSS，都会有概率获得0xff0000天地精华0xffffff！"],["我一定完成任务！"],[function():void
                           {
                              NpcDialog.show(NPC.TAIMIYAKE,["既然海盗已经离开，我需要重新回到能量蛋中。当能量蛋吸收足够的天地精华后，一个强力而又自信的我将重新回归！"],["哇，我明白了！"],[function():void
                              {
                                 TasksManager.complete(771,2,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(5);
                                    }
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
