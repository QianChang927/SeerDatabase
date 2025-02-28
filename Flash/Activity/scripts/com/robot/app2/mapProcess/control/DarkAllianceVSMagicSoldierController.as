package com.robot.app2.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class DarkAllianceVSMagicSoldierController
   {
       
      
      public function DarkAllianceVSMagicSoldierController()
      {
         super();
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(1829);
      }
      
      private static function pro0() : void
      {
         NpcDialog.show(NPC.SUOLUOSENG,["可恶！黄金天马、巴斯特他们都来插手！混账！"],["主人稍安勿躁！"],[function():void
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_948_1"),function(param1:MovieClip):void
            {
               var taskMc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(taskMc);
               AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
               {
                  NpcDialog.show(NPC.YILANDI,["迷宫入口就用来做黄金天马的葬身之地吧！当然，还有那个什么创世神兵！"],["那就让我们一起解决吧！"],[function():void
                  {
                     NpcDialog.show(NPC.AIXINGE,["所谓的什么创世神兵，根本不值一提！该让巴斯特他们离开，我们才会有机会！ "],["就让我们各个击破吧！"],[function():void
                     {
                        NpcDialog.show(NPC.SUOLUOSENG,["我不管你们用什么办法，我只是不希望黄金天马到迷宫入口！甚至都不要让他离开天马祭坛！ "],["我等必当尽力！"],[function():void
                        {
                           NpcDialog.show(NPC.SUOLUOSENG,["记住，只要创世神兵回到第六星系，我们就彻底完了。不仅是我，包括你们，将从这个宇宙中彻底消失！"],["不能让创世神兵回到第六星系！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                              {
                                 TasksManager.complete(1829,0,function():void
                                 {
                                    SocketConnection.send(1022,86064216);
                                    MapManager.changeMap(956);
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      private static function pro1() : void
      {
         NpcDialog.show(NPC.DAFUNI,["迷宫的目的就是阻止外人进入。第六星系内一定发生了什么翻天覆地事情！"],["我们必须要去找黄金天马！"],[function():void
         {
            NpcDialog.show(NPC.FULUODUO,["黄金天马曾经到访过第六星系。创世之神曾经给黄金天马的翅膀加过祝福。他一定能够帮助我们"],["那我们快去寻找黄金天马！"],[function():void
            {
               NpcDialog.show(NPC.GEMAISI,["等一下！看来我们是走不掉了！"],["什么？"],[function():void
               {
                  ResourceManager.getResource(ClientConfig.getMapAnimate("map_956_1"),function(param1:MovieClip):void
                  {
                     var taskMc:MovieClip = param1;
                     MapManager.currentMap.controlLevel.addChild(taskMc);
                     AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
                     {
                        NpcDialog.show(NPC.YILANDI,["想要回到第六星系？可惜你们只能停留在这里了！我会给你们留一个葬身之地！"],["可恶！"],[function():void
                        {
                           NpcDialog.show(NPC.FULUODUO,["还是留给你们自己吧！没有任何人能够阻挡创世神兵回到第六星系！"],["太天真了！"],[function():void
                           {
                              NpcDialog.show(NPC.GELAIAO,["你以为你们找到黄金天马就可以进入第六星系？黄金天马……多么可笑！那个老家伙都已经死掉了！"],["满口胡言！"],[function():void
                              {
                                 NpcDialog.show(NPC.FULUODUO,["黄金天马是天马一族的皇者，他拥有巨大的能量，超凡的方向感和飞行能力至今无人能及。"],["呵呵！想的多么好啊！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.AIXINGE,["你们就安息在这里吧！主人一定会厚葬你们的。否则，别怪我们不客气！"],["大言不惭！"],[function():void
                                       {
                                          NpcDialog.show(NPC.DAFUNI,["我们不能在这里再继续拖延时间了！我们必须尽快找到黄金天马，进入第六星系，迫在眉睫。"],["主人不会同意！"],[function():void
                                          {
                                             NpcDialog.show(NPC.NUOYIER,["跟你们唠叨了半天，告诉你们，索伦森不会让你们离开这里的！"],["索伦森？"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.YILANDI,["你是谁？为什么可以躲在石缝里面？"],["你们可以滚了！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
                                                      {
                                                         TasksManager.complete(1829,1,function():void
                                                         {
                                                            SocketConnection.send(1022,86064217);
                                                            pro2();
                                                         });
                                                      });
                                                   }]);
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    });
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function pro2() : void
      {
         NpcDialog.show(NPC.GEMAISI,["好险！若是正面对抗，我们估计根本不是他们的对手"],["他是谁?"],[function():void
         {
            NpcDialog.show(NPC.DAFUNI,["伊兰迪他们走了？感谢您的帮助。请问您是何方神圣？能否带我们进入第六星系？"],["去找黄金天马吧！"],[function():void
            {
               SocketConnection.send(1022,86064218);
               EventManager.addEventListener("GoldenHorsePuzzleComplete",onGoldenHorsePuzzleComplete);
               ModuleManager.showModule(ClientConfig.getAppModule("GoldenHorsePuzzlePanel"));
            }]);
         }]);
      }
      
      private static function onGoldenHorsePuzzleComplete(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         if(e.paramObject.isWin)
         {
            SocketConnection.send(1022,86064219);
            EventManager.removeEventListener("GoldenHorsePuzzleComplete",arguments.callee);
            NpcDialog.show(NPC.GEMAISI,["原来这就是传说中的黄金天马！天马祭坛，天马一族的禁地！"],["时间紧迫，我们快走！"],[function():void
            {
               NpcDialog.show(NPC.FULUODUO,["希望黄金天马能够帮助我们早日回到第六星系！"],["快去天马祭坛寻找！"],[function():void
               {
                  ResourceManager.getResource(ClientConfig.getMapAnimate("map_956_1"),function(param1:MovieClip):void
                  {
                     var taskMc:MovieClip = param1;
                     MapManager.currentMap.controlLevel.addChild(taskMc);
                     AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
                     {
                        TasksManager.complete(1829,2,function():void
                        {
                           TasksManager.setTaskStatus(1829,TasksManager.COMPLETE);
                        });
                     });
                  });
               }]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.DAFUNI,["伊兰迪他们走了？感谢您的帮助。请问您是何方神圣？能否带我们进入第六星系？"],["去找黄金天马吧！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("GoldenHorsePuzzlePanel"));
            }]);
         }
      }
      
      public static function init() : void
      {
         switch(MapManager.currentMap.id)
         {
            case 948:
               if(taskState == TasksManager.UN_ACCEPT)
               {
                  TasksManager.accept(1829,function():void
                  {
                     pro0();
                  });
               }
               else if(taskState == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.getProStatusList(1829,function(param1:Array):void
                  {
                     if(!param1[0])
                     {
                        pro0();
                     }
                     else
                     {
                        destroy();
                     }
                  });
               }
               break;
            case 956:
               if(taskState == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.getProStatusList(1829,function(param1:Array):void
                  {
                     if(Boolean(param1[0]) && !param1[1])
                     {
                        pro1();
                     }
                     else if(Boolean(param1[1]) && !param1[2])
                     {
                        pro2();
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
      }
      
      public static function destroy() : void
      {
         EventManager.removeEventListener("GoldenHorsePuzzleComplete",onGoldenHorsePuzzleComplete);
      }
   }
}
