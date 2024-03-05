package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1221;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1221
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static var _isFighting:Boolean = false;
       
      
      public function Task1221()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task1221mc"];
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TaskController_1221.TASK_ID);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         else if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1221.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
               }
            });
         }
      }
      
      public static function initForMap30(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         _taskState = TasksManager.getTaskStatus(TaskController_1221.TASK_ID);
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1221.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,pro2);
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap730(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TaskController_1221.TASK_ID);
         taskMC.visible = false;
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1221.TASK_ID,function(param1:Array):void
            {
               if(param1[0])
               {
                  if(Boolean(param1[0]) && !param1[1])
                  {
                     pro1();
                  }
                  else
                  {
                     destroy();
                  }
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function pro0() : void
      {
         taskMC.visible = true;
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["大祭司！我们的来意你已经知道了吧？"],["恩"],[function():void
            {
               NpcDialog.show(NPC.MUMU,["你们也是来打探七色极光之羽的下落的吧？这几天来问我这个的人实在太多了"],["请告诉我们吧！"],[function():void
               {
                  NpcDialog.show(NPC.MUMU,["不要着急嘛！我可以给你一点提示哦：踏破铁鞋无觅处，得来全不费功夫！"],["咦，什么意思啊？"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["咦，这不是大话王巴特吗？你在找我们吗？"],["是呀！"],[function():void
                        {
                           NpcDialog.show(NPC.BATE,["我知道赤色极光之羽的下落！可是大家都不肯想信我！我想，小息和赛尔的话，一定会想信我的！"],["哈哈！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["哈哈，你看，你总是谎话连篇，这下子吃到苦头了吧！"],["555，难道连小息你也不相信我嘛？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.BATE,["这次我绝对不骗人！其实赤色极光之羽，远在天边，近在眼前！它就在——"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          TasksManager.complete(TaskController_1221.TASK_ID,0,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                pro1();
                                             }
                                          });
                                       });
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function pro1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["赫尔卡星！？巴特——你不是又在撒谎吧？"],["真的！真的！"],[function():void
         {
            NpcDialog.show(NPC.BATE,["事情的经过是这样滴……"],null,null,false,function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("task_1221_3"),function():void
               {
                  NpcDialog.show(NPC.SEER,["……它在哪里？我们去找它吧！怎么能把捡到的东西随便据为己有呢！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BATE,["它当然还在赫尔卡星，可是所有的比比鼠都长一个样子，我也不知道到底是哪一个，你们需要挨个去找啦！"],["就交给我们吧！"],[function():void
                     {
                        TasksManager.complete(TaskController_1221.TASK_ID,1,function(param1:Boolean):void
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
      
      public static function pro2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            data = e.data as ByteArray;
            if(data.readUnsignedInt() == 0)
            {
               NpcDialog.show(NPC.BATE,["赛尔，看你的啦，去点比比鼠对战，找到羽毛吧！"],["好的！"]);
            }
            else
            {
               taskMC.removeEventListener(MouseEvent.CLICK,pro2);
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  CommonUI.addYellowExcal(_map.topLevel,613,364);
                  taskMC.addEventListener(MouseEvent.CLICK,onBaTeClick);
               });
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,1200257,1200257,2);
      }
      
      private static function onBaTeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onBaTeClick);
         CommonUI.removeYellowExcal(_map.topLevel);
         NpcDialog.show(NPC.BATE,["赛尔，我没有骗你吧！我想比比鼠这次应该知道见到别人的东西应该归还失主了，你快去雷神秘境还给雷伊吧！"],["好的！哈哈！"],[function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               var e:MapEvent = param1;
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               NpcDialog.show(NPC.SEER,["雷伊雷伊！我找到了赤色极光之羽！"],["干的好！"],[function():void
               {
                  NpcDialog.show(NPC.LEIYI,["谢谢你赛尔！快点点击雷光之羽存放装置激活翅膀领取你的奖励吧！其他的羽毛也还麻烦你继续留意哦！"],["恩恩，放心吧雷伊！"],[function():void
                  {
                     CommonUI.addYellowArrow(MapManager.currentMap.topLevel,669,139,30);
                     TasksManager.complete(TaskController_1221.TASK_ID,2);
                  }]);
               }]);
            });
            MapManager.changeMap(767);
         }]);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            data = e.data as ByteArray;
            if(data.readUnsignedInt() > 0)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,pro2);
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  taskMC.addEventListener(MouseEvent.CLICK,onBaTeClick);
               });
            }
            else
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc");
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,1200257,1200257,2);
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_map)
         {
            if(MapManager.currentMap.id != 698)
            {
               CommonUI.removeYellowExcal(_map.topLevel);
               CommonUI.removeYellowArrow(_map.topLevel);
               taskMC.removeEventListener(MouseEvent.CLICK,pro2);
               taskMC.removeEventListener(MouseEvent.CLICK,onBaTeClick);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
