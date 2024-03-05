package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1235;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class Task1235
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _step:uint = 0;
       
      
      public function Task1235()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.depthLevel["task1235mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1235.TASK_ID);
      }
      
      public static function initForMap767(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onClick);
         if(taskState != TasksManager.ALR_ACCEPT)
         {
            destroy();
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(taskState == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("XuanBingAuthority"),"正在加载 ...");
            return;
         }
         if(_step == 0)
         {
            NpcDialog.show(NPC.SAIXIAOXI,["木木祭祀，我们正要找你呢！相信你已经知道我们的来意了吧！"],["恩，来的正好！"],[function():void
            {
               NpcDialog.show(NPC.MUMU,["雷伊正要找你们呢！它有个好消息要告诉你！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIYI,["赛尔感谢你一直为收集极光之羽努力！我决定给你嘉奖！"],["哇！什么嘉奖！"],[function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["对于收集齐羽毛的赛尔，我将授予你“极光使者”的称号!"],["太棒了！“极光使者”是什么？"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["这个称号将代表我们的友谊永不磨灭！你要加油哦赛尔!！"],["现在只剩下最后一根羽毛了！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["上次是佐格和艾利逊把剩下的羽毛藏起来了！这最后的一根，估计也和他们脱不了干系！"],["这两个坏蛋！"],[function():void
                           {
                              NpcDialog.show(NPC.MUMU,["呵呵，区区海盗能有何能耐！最后的羽毛的线索我已经知道了！"],["在哪里？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                                 {
                                    _step = 1;
                                    MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                                    {
                                       MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                                       taskMC.buttonMode = true;
                                       taskMC.visible = true;
                                       taskMC.addEventListener(MouseEvent.CLICK,onClick);
                                    });
                                    MapManager.changeMap(21);
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               });
            }]);
         }
         else if(_step == 1)
         {
            AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["木木又把我们送来海洋星了，难道这次又和那个神秘的隐士有关？"],["木木真喜欢故弄玄虚！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     EventManager.addEventListener(Event.CLOSE,onClose);
                     ModuleManager.showModule(ClientConfig.getAppModule("ConchAuthority"),"正在加载 ...");
                  });
               }]);
            });
         }
         else if(_step == 2)
         {
            NpcDialog.show(NPC.MUMU,["呵呵，这个晶体是不能强行打开的，我可以帮你开个头，之后就靠你啦！"],["交给我吧！"],[function():void
            {
               TasksManager.complete(TaskController_1235.TASK_ID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("XuanBingAuthority"),"正在加载 ...");
                  }
               });
            }]);
         }
      }
      
      private static function onClose(param1:Event) : void
      {
         var e:Event = param1;
         EventManager.removeEventListener(Event.CLOSE,onClose);
         NpcDialog.show(NPC.SAIXIAOXI,["哈哈！小小机关，怎能难道天才的我！"],["看有封信！"],[function():void
         {
            CartoonManager.play(ClientConfig.getFullMovie("task_1235_2"),function():void
            {
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["这个晶体应该就是第二重机关了，看起来坚硬无比！"],["让我来！"],[function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["让我用斩月双刀——"],["省省吧！"],[function():void
                     {
                        NpcDialog.show(NPC.KALULU,["万一毁坏了羽毛就坏了！还是回去问问木木吧！它一定有办法！"],["看来只好如此了！"],[function():void
                        {
                           _step = 2;
                           MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                           {
                              MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                              taskMC.buttonMode = true;
                              taskMC.addEventListener(MouseEvent.CLICK,onClick);
                           });
                           MapManager.changeMap(767);
                        }]);
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            _map = null;
         }
      }
   }
}
