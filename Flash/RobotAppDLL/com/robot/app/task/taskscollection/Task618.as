package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_618;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task618
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task618()
      {
         super();
      }
      
      public static function initTask() : void
      {
         MapManager.changeMap(414);
      }
      
      public static function initTask_414(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_618.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_618.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro_0();
               }
               else
               {
                  removeResouce_414(map);
               }
            });
         }
         else
         {
            removeResouce_414(map);
         }
      }
      
      public static function removeResouce_414(param1:BaseMapProcess) : void
      {
         DisplayUtil.removeForParent(param1.conLevel["arrow"]);
         param1.conLevel["arrow"] = null;
         DisplayUtil.removeForParent(param1.conLevel["task_618_1"]);
         param1.conLevel["task_618_1"] = null;
         DisplayUtil.removeForParent(param1.conLevel["task_618_2"]);
         param1.conLevel["task_618_2"] = null;
      }
      
      private static function startPro_0() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["arrow"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["task_618_1"],1,"mc_1",function():void
         {
            NpcDialog.show(NPC.SEER,["啊？！盖亚！你……你怎么了？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.GAIYA,["咳咳……咳咳……"],["你……你到底怎么了？我该怎么办？"],[function():void
               {
                  NpcDialog.show(NPC.GAIYA,["咤……咤克斯……，最后那场战斗我被那家伙的瘴气伤到了，不……不过没……事……"],null,null,false,function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_618"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["啊啊啊啊！！那我该怎么办！！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["task_618_2"],0,"",function():void
                           {
                              NpcDialog.show(NPC.SEER,["无论如何，一定要救盖亚！！！"],null,null,false,function():void
                              {
                                 MainManager.actorModel.hidePet();
                                 MainManager.actorModel.hideNono();
                                 MainManager.actorModel.visible = false;
                                 _map.conLevel["arrow"].visible = true;
                                 _map.conLevel["task_618_1"].buttonMode = true;
                                 _map.conLevel["task_618_1"].addEventListener(MouseEvent.CLICK,onGaiyaClcik);
                              });
                           });
                        });
                     });
                  });
               }]);
            });
         });
      }
      
      public static function onGaiyaClcik(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["task_618_1"].buttonMode = false;
         _map.conLevel["task_618_1"].removeEventListener(MouseEvent.CLICK,onGaiyaClcik);
         AnimateManager.playMcAnimate(_map.conLevel["task_618_1"],2,"mc_2",function():void
         {
            if(MainManager.actorModel.pet)
            {
               MainManager.actorModel.showPet(MainManager.actorModel.pet.info);
            }
            if(MainManager.actorModel.nono)
            {
               MainManager.actorModel.showNono(MainManager.actorModel.nono.info,MainManager.actorInfo.actionType);
            }
            MainManager.actorModel.visible = true;
            TasksManager.complete(TaskController_618.TASK_ID,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(423);
               }
            });
         });
      }
      
      public static function initTask_423(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_618.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_618.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else
               {
                  removeResouce_423(map);
               }
            });
         }
         else
         {
            removeResouce_423(map);
         }
      }
      
      public static function removeResouce_423(param1:BaseMapProcess) : void
      {
         DisplayUtil.removeForParent(_map.conLevel["arrow"]);
         _map.conLevel["arrow"] = null;
         DisplayUtil.removeForParent(_map.conLevel["tielian"]);
         _map.conLevel["tielian"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_1"]);
         _map.animatorLevel["task_618_1"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_2"]);
         _map.animatorLevel["task_618_2"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_3"]);
         _map.animatorLevel["task_618_3"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_4"]);
         _map.animatorLevel["task_618_4"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_5"]);
         _map.animatorLevel["task_618_5"] = null;
         DisplayUtil.removeForParent(_map.animatorLevel["task_618_6"]);
         _map.animatorLevel["task_618_6"] = null;
      }
      
      private static function startPro_1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         MainManager.actorModel.hidePet();
         MainManager.actorModel.hideNono();
         MainManager.actorModel.visible = false;
         _map.conLevel["arrow"].visible = false;
         _map.animatorLevel["task_618_2"].visible = false;
         _map.animatorLevel["task_618_3"].visible = false;
         _map.animatorLevel["task_618_4"].visible = false;
         _map.animatorLevel["task_618_5"].visible = false;
         _map.animatorLevel["task_618_6"].visible = false;
         AnimateManager.playMcAnimate(_map.animatorLevel["task_618_1"],0,"",function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["是谁在外面喧哗，好大的胆子，竟敢打扰我睡觉！"],["啊，尊敬的劳克蒙德，救救我的朋友盖亚吧。"],[function():void
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["笑话！我为什么要救这个陌生人，快滚出我的领地，否则我不客气了！"],null,null,false,function():void
               {
                  _map.animatorLevel["task_618_1"].visible = false;
                  _map.animatorLevel["task_618_2"].visible = true;
                  AnimateManager.playMcAnimate(_map.animatorLevel["task_618_2"],0,"",function():void
                  {
                     _map.conLevel["arrow"].visible = true;
                     _map.conLevel["tielian"].buttonMode = true;
                     _map.conLevel["tielian"].addEventListener(MouseEvent.CLICK,onTielianClcik);
                  });
               });
            }]);
         });
      }
      
      public static function onTielianClcik(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["arrow"].visible = false;
         _map.conLevel["tielian"].buttonMode = false;
         _map.conLevel["tielian"].removeEventListener(MouseEvent.CLICK,onTielianClcik);
         _map.animatorLevel["task_618_2"].visible = false;
         _map.animatorLevel["task_618_3"].visible = true;
         AnimateManager.playMcAnimate(_map.animatorLevel["task_618_3"],0,"",function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["哼哼！小子，没听见我刚说的话吗？还不快滚！"],["只要你肯救我朋友，什么条件我都答应你！"],[function():void
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["（思考中……）嗯……什么条件你都肯答应?"],null,null,false,function():void
               {
                  _map.animatorLevel["task_618_3"].visible = false;
                  _map.animatorLevel["task_618_4"].visible = true;
                  AnimateManager.playMcAnimate(_map.animatorLevel["task_618_4"],0,"",function():void
                  {
                     NpcDialog.show(NPC.GAIYA,["我……没……没事，不用你管！用不着这个老怪物插手！咳咳……"],["盖亚！不行，你伤的很重，这样你会坚持不住的。劳克蒙德，求求你救救他吧！"],[function():void
                     {
                        NpcDialog.show(NPC.LAOKE_LEIDE,["好小子！骨头还挺硬的，我就喜欢你这样的家伙！好，只要他答应我一件事情，我可以考虑救他！"],["……什么事情？"],[function():void
                        {
                           NpcDialog.show(NPC.LAOKE_LEIDE,["哼！我一身好本领，却被这魔链锁住！我看这小子是个学功夫的好骨子，他病好后学会我这身本领，我要让外界知道我劳克蒙德的存在！"],["这……"],[function():void
                           {
                              NpcDialog.show(NPC.GAIYA,["哈哈……可笑！就凭你，我堂堂战斗大师，要我学你的本领？我用不着你来救！咳咳……"],null,null,false,function():void
                              {
                                 _map.animatorLevel["task_618_4"].visible = false;
                                 _map.animatorLevel["task_618_5"].visible = true;
                                 AnimateManager.playMcAnimate(_map.animatorLevel["task_618_5"],0,"",function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["盖亚！你怎么了，醒醒，盖亚。"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["劳克蒙德，行行好吧，求求你救救我的朋友吧，他伤的真的很严重！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.LAOKE_LEIDE,["（这小子死到临头还这么倔，这脾气我喜欢！不如先救了他，然后再……）"],["把他留下，我会救他的，你可以走了！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["盖亚，有劳克蒙德的帮助，你一定会好起来来的！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.LAOKE_LEIDE,["别啰嗦了，我看这小子都昏了，伤的不轻，再不治就真的救不了了！"],null,null,false,function():void
                                                {
                                                   _map.animatorLevel["task_618_5"].visible = false;
                                                   _map.animatorLevel["task_618_6"].visible = true;
                                                   AnimateManager.playMcAnimate(_map.animatorLevel["task_618_6"],0,"",function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["希望盖亚能够早日康复！先回博士那报告这一切，过几天再来看望盖亚。"],null,null,false,function():void
                                                      {
                                                         TasksManager.complete(TaskController_618.TASK_ID,1,function(param1:Boolean):void
                                                         {
                                                            if(param1)
                                                            {
                                                               MapManager.changeMap(5);
                                                            }
                                                         });
                                                      });
                                                   });
                                                });
                                             });
                                          }]);
                                       });
                                    });
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.showPet(MainManager.actorModel.pet.info);
         }
         if(MainManager.actorModel.nono)
         {
            MainManager.actorModel.showNono(MainManager.actorModel.nono.info,MainManager.actorInfo.actionType);
         }
         MainManager.actorModel.visible = true;
         if(_map)
         {
            if(_map.conLevel["task_618_1"])
            {
               _map.conLevel["task_618_1"].removeEventListener(MouseEvent.CLICK,onGaiyaClcik);
            }
            if(_map.conLevel["tielian"])
            {
               _map.conLevel["tielian"].removeEventListener(MouseEvent.CLICK,onTielianClcik);
            }
         }
      }
   }
}
