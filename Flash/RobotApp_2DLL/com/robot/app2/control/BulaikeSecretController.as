package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class BulaikeSecretController
   {
      
      private static var taskId:uint = 3006;
      
      private static var myMap:BaseMapProcess;
      
      private static var taskMc:MovieClip;
       
      
      public function BulaikeSecretController()
      {
         super();
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(taskId);
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var m:BaseMapProcess = param1;
         myMap = m;
         taskMc = myMap.conLevel["taskMc"];
         if(taskState == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(taskId,function():void
            {
               StatManager.sendStat2014("支线暗影布莱克","参与前置任务",StatManager.RUN_ACT);
               pro0();
            });
         }
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(taskId,function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  pro0();
               }
               else if(param1[0] == 1 && param1[1] == 0)
               {
                  KTool.hideMapAllPlayerAndMonster();
                  pro1();
               }
               else if(param1[1] == 1 && param1[2] == 0)
               {
                  KTool.hideMapAllPlayerAndMonster();
                  pro2();
               }
               else
               {
                  destroy();
               }
            });
         }
         if(taskState == TasksManager.COMPLETE)
         {
            destroy();
         }
      }
      
      private static function pro0() : void
      {
         AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
         {
            var onClick:Function = null;
            onClick = function(param1:MouseEvent):void
            {
               var e:MouseEvent = param1;
               taskMc.removeEventListener(MouseEvent.CLICK,onClick);
               taskMc.gotoAndStop(2);
               KTool.hideMapAllPlayerAndMonster();
               NpcDialog.show(NPC.ASASI,["开启吧！强大的魔界之门，我将率领魔界军团踏平这个曾经背叛过我的世界！"],["既然这样…那我只有亲手毁灭它！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMc,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.ASASI,["哈哈哈…愤怒吧！魔界军团！用你们的最强大的能量将整个宇宙全部摧毁吧！"],["住手，阿萨斯！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMc,3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.ASASI,["哼哼…一旦魔界之门开启，任凭什么力量都无法阻止魔界军团倾巢而出！"],["魔界毕竟主宰整个宇宙！"],[function():void
                           {
                              NpcDialog.show(NPC.BOSAIDONG,["阿萨斯，难道你自己不知道面对的对手是神吗？"],["哼哼…就算是神，我也不会放在眼里！"],[function():void
                              {
                                 NpcDialog.show(NPC.BOSAIDONG,["居然如此无礼，那我只能剥夺你的生命了！让你永远长眠在魔界之门中！"],["波塞冬，我负责摧毁魔界之门！！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active2014052923689"),function():void
                                    {
                                       NpcDialog.show(NPC.AOSIKA,["漂亮，终于将这些家伙打回老家了！波塞冬你的实力果然强大！"],["与神对抗，太不明智了！"],[function():void
                                       {
                                          NpcDialog.show(NPC.AOSIKA,["恩，那是肯定的！对了，我们这次来还有另一个目的就是帮助战神联盟找回布莱克！！"],["他会在哪里呢！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["伟大的波塞冬和奥斯卡，布莱克正在影之殿中和魔界三巨头影皇对抗呢！你们快去看看吧！"],["魔界三巨头？看来我们有目标了！"],[function():void
                                             {
                                                TasksManager.complete(taskId,0,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      pro1();
                                                   }
                                                });
                                             }]);
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
            };
            taskMc.gotoAndStop(11);
            taskMc.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      private static function pro1() : void
      {
         AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
         {
            NpcDialog.show(NPC.SEER,["布莱克，你怎么了！是谁把你弄成这样，一定是影皇这个家伙，不可饶恕啊！"],["哈哈哈…卑微的对手！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["影皇我一定要打倒你，快告诉我，我父亲在哪里？！"],["哼哼…等你战胜我再说吧！！"],[function():void
                  {
                     NpcDialog.show(NPC.AOSIKA,["够了…影皇，你给我住手！在我面前没人可以伤害布莱克，要么和我一战，要么乖乖的回到魔界去！"],["笑话，你是在和我谈条件吗？"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
                        {
                           NpcDialog.show(NPC.YINGHUANG,["哼哼…你的实力不错，看来我应该先解决了你！像布莱克这样没有超能力的家伙，不配做我影皇的对手！"],["奥斯卡，这是我自己的事情，你别插手！"],[function():void
                           {
                              NpcDialog.show(NPC.BOSAIDONG,["奥斯卡，如果再不把布莱克带走的话，他的生命可能会有危险！"],["恩恩，说的对！"],[function():void
                              {
                                 NpcDialog.show(NPC.AOSIKA,["波塞冬，布莱克就交给你了，影皇由我来对付，你快带他走吧！时间不多了！"],["好吧！我这就带他走！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
                                    {
                                       NpcDialog.show(NPC.AOSIKA,["这下好了，没有谁能够来打扰我们之间的战斗，影皇你准备好了吗？！"],["哼哼…有点意思！！"],[function():void
                                       {
                                          TasksManager.complete(taskId,1,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                pro2();
                                             }
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function pro2() : void
      {
         AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
         {
            NpcDialog.show(NPC.YINGHUANG,["没有谁能够从影之殿活着出来，包括你和布莱克的父亲在内！"],["什么！！布莱克的父亲！！"],[function():void
            {
               NpcDialog.show(NPC.AOSIKA,["看来魔界三巨头中就你影皇是最强的存在，既然迈尔斯的对手是战皇，那么我奥斯卡的对手就是你影皇！"],["迈尔斯在努力，我也不能拖后腿！！"],[function():void
               {
                  NpcDialog.show(NPC.YINGHUANG,["进来吧！让你见识一下影之殿的恐怖和绝望！小心哦！千万别迷路，我会在神殿尽头等着你！"],["放心吧！我一定会击败你的！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
                     {
                        NpcDialog.show(NPC.SEER,["我也不能袖手旁观，布莱克我一定会为你报仇的！"],["影皇…我来了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
                           {
                              NpcDialog.show(NPC.SEER,["不好…那撕心裂肺的呼喊声是从影之殿传出来的，难道奥斯卡遇到危险了！！"],["奥斯卡，等我！"],[function():void
                              {
                                 TasksManager.complete(taskId,2,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       StatManager.sendStat2014("支线暗影布莱克","完成前置任务",StatManager.RUN_ACT);
                                       KTool.showMapAllPlayerAndMonster();
                                       DisplayUtil.removeForParent(taskMc);
                                       ModuleManager.showModule(ClientConfig.getAppModule("ADBulaikeSecretMainPanel"));
                                    }
                                 });
                              }]);
                           });
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(taskMc != null)
         {
            DisplayUtil.removeForParent(taskMc);
         }
         myMap = null;
         taskMc = null;
         KTool.showMapAllPlayerAndMonster();
      }
   }
}
