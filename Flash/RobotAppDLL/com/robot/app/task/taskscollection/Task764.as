package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_764;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task764
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
      
      private static var isFight:Boolean;
       
      
      public function Task764()
      {
         super();
      }
      
      public static function applyTask() : void
      {
         NpcDialog.show(NPC.CROW,["赛尔号的成功在于大家的团结！我坚信凝聚的力量永远是最强的！"],["#101塞西利亚星的阴谋","我会成为赛尔号的领头人！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_764_1"),function():void
            {
               TasksManager.accept(TaskController_764.TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("任务接取成功");
                     taskStep = 0;
                     if(MapManager.currentMap.id == 15)
                     {
                        MapManager.refMap(false,true);
                     }
                     else
                     {
                        MapManager.changeMap(15);
                     }
                  }
               });
            },false);
         }]);
      }
      
      public static function initTaskForMap15(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         TasksManager.getProStatusList(TaskController_764.TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               taskStep = 0;
               _map.conLevel["beibeiNPC"].gotoAndStop(2);
            }
         });
         _map.conLevel["beibeiNPC"].buttonMode = true;
         _map.conLevel["beibeiNPC"].addEventListener(MouseEvent.CLICK,npcClickHandler);
      }
      
      private static function npcClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(370,260),function():void
         {
            if(taskStep == 0)
            {
               NpcDialog.show(NPC.BEIBEI,["好热呀！好热呀！好热呀！"],["#101塞西利亚星的阴谋","嗯，免费的桑拿享受久了也不行啊！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["贝贝，这段时间火山星还有“死黑能量”出现吗？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BEIBEI,["这个到没有，但不久前海盗来过……"],["什么？"],[function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_764_2"),function():void
                        {
                           NpcDialog.show(NPC.BEIBEI,["海盗这次的行动似乎很庞大啊！格雷斯星又被牵扯了进来……"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SEER,["你说的对，他们在下一盘很大的棋局！贝贝，如果发现什么新情况记得通知赛尔号，我们必须及时应对。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.BEIBEI,["放心吧，只要有可疑事情我会立刻告知你们。"],["好的，我现在得去格雷斯星，希望找到新的线索。"],[function():void
                                 {
                                    TasksManager.complete(TaskController_764.TASK_ID,0,function():void
                                    {
                                       DebugTrace.show("第一步完成");
                                       taskStep = 1;
                                       MapManager.changeMap(507);
                                    });
                                 }]);
                              });
                           });
                        });
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.BEIBEI,["好热呀！好热呀！好热呀！"],["嗯，免费的桑拿享受久了也不行啊！"]);
            }
         });
      }
      
      public static function initTaskForMap507(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         TasksManager.getProStatusList(TaskController_764.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               taskStep = 1;
               _map.conLevel["bulaikeNPC"]["signMC"].visible = true;
            }
         });
         _map.conLevel["bulaikeNPC"].buttonMode = true;
         _map.conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
      }
      
      private static function bulaikeNPCHandler(param1:MouseEvent) : void
      {
         var fightFun:Function = null;
         var evt:MouseEvent = param1;
         fightFun = function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
            {
               FightManager.fightWithBoss("布莱克",0);
            }]);
         };
         MainManager.actorModel.moveAndAction(new Point(325,215),function():void
         {
            if(_map.conLevel["bulaikeNPC"]["signMC"].visible == true && taskStep == 1)
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["#101塞西利亚星的阴谋","与布莱克对战。","算了，我还是先围观吧。"],[function():void
               {
                  _map.conLevel["bulaikeNPC"]["signMC"].visible = false;
                  NpcDialog.show(NPC.SEER,["布莱克！海盗又潜入格雷斯星了，这次似乎和“死黑能量”有关，你一定要多加注意！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,[MainManager.actorInfo.formatNick + "，你来的真巧，我刚刚就收拾了两个海盗，他们企图进入邪灵圣殿获取“星际碎片”的残块。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["而且，我还从他们口中得知，海盗和邪灵正前往塞西利亚星，要捕捉精灵做试验！"],["太可恶了！又要拿无辜的精灵当牺牲品。"],[function():void
                        {
                           NpcDialog.show(NPC.BULAIKE_NEW,["嗯！我已经把情况告知赛尔号了，船长将派出先锋队去塞西利亚星，同时还要增加格里斯星上先锋队的兵力以防止敌人入侵！"],["嗯！事不宜迟，我们必须阻止海盗的阴谋！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_764_3"),function():void
                              {
                                 TasksManager.complete(TaskController_764.TASK_ID,1,function():void
                                 {
                                    DebugTrace.show("第二步完成");
                                    taskStep = 2;
                                    MapManager.changeMap(40);
                                 });
                              });
                           }]);
                        }]);
                     });
                  });
               },fightFun]);
            }
            else
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["与布莱克对战。","算了，我还是先围观吧。"],[fightFun]);
            }
         });
      }
      
      public static function initTaskForMap40(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         TasksManager.getProStatusList(TaskController_764.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               taskStep = 2;
               _map.conLevel["haidao4MC"].visible = true;
               _map.conLevel["bulaikeMC"].visible = true;
               _map.conLevel["bulaikeMC"].gotoAndStop(2);
               _map.conLevel["bulaikeMC"].buttonMode = true;
               _map.conLevel["bulaikeMC"].addEventListener(MouseEvent.CLICK,bulaikeMCHandler);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["haidao4MC"]);
            }
         });
      }
      
      private static function bulaikeMCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(520,450),function():void
         {
            _map.conLevel["bulaikeMC"].gotoAndStop(1);
            _map.conLevel["bulaikeMC"].visible = true;
            NpcDialog.show(NPC.BULAIKE_NEW,["海盗的新式武器威力强劲，咱们要小心应付。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["嗯！放心，我会让他们吃不了兜着走！"],["（用头部射击消灭海盗）"],[function():void
               {
                  if(fightGang == null)
                  {
                     DisplayUtil.removeForParent(_map.conLevel["haidao4MC"]);
                     fightGang = new FightGang(120,100,5);
                     fightGang.createOgre(2538,new Point(246,207),10,5);
                     fightGang.createOgre(2538,new Point(300,180),10,5);
                     fightGang.createOgre(2538,new Point(362,170),10,5);
                     fightGang.createOgre(2538,new Point(432,173),10,5);
                     fightGang.beginFight().addResponse(function():void
                     {
                        fightGang.destroyFight();
                        fightGang = null;
                        NpcDialog.show(NPC.BULAIKE_NEW,["我们要抓紧时间啊！现在阿克希亚还不知道被他们折磨成什么样了！"],["Let’s go！"],[function():void
                        {
                           TasksManager.complete(TaskController_764.TASK_ID,2,function():void
                           {
                              DebugTrace.show("第三步完成");
                              taskStep = 3;
                              MapManager.changeMap(43);
                           });
                        }]);
                     },function():void
                     {
                        NpcDialog.show(NPC.SEER,["可恶！我一定要冲破你们的阻碍！"],["（用头部射击消灭敌人）"],[function():void
                        {
                           fightGang.beginFight();
                        }]);
                     });
                  }
               }]);
            });
         });
      }
      
      public static function initTaskForMap43(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         TasksManager.getProStatusList(TaskController_764.TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[4])
            {
               taskStep = 3;
               OgreController.isShow = false;
               ToolBarController.showOrHideAllUser(false);
               if(isFight)
               {
                  return;
               }
               MainManager.selfVisible = false;
               _map.animatorLevel["task764MC"].visible = true;
               AnimateManager.playMcAnimate(_map.animatorLevel["task764MC"],0,"",function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["我要以其人之道还治其人之身，你好好尝尝暗黑能量的滋味吧！"],["（点击艾文对战）"],[function():void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightManager.fightWithBoss("艾文",0);
                     isFight = true;
                  }]);
               });
            }
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         DisplayUtil.removeForParent(_map.animatorLevel["task764MC"]);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         MainManager.actorInfo.pos = new Point(222,128);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_764_4"),function():void
         {
            NpcDialog.show(NPC.SEER,["布莱克！你体内的暗黑能量又失控了？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["嗯！面对邪灵组织我真的控制不住，所以会不顾一切的激发所有的潜能！"],["我知道你对他们恨之入骨！但千万别让仇恨捆绑住自己的心灵。"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["我明白，自控力很重要！哎！阿克希亚现在比较虚弱，而且，敌人抽取她的“基因粒子”一定是另有所图！"],["我们先把阿克希亚安顿好，然后回赛尔号从长计议！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_764_5"),function():void
                     {
                        TasksManager.complete(TaskController_764.TASK_ID,3,function():void
                        {
                           DebugTrace.show("任务完成");
                           taskStep = 4;
                           isFight = false;
                           OgreController.isShow = true;
                           ToolBarController.showOrHideAllUser(true);
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 15)
         {
            _map.conLevel["beibeiNPC"].removeEventListener(MouseEvent.CLICK,npcClickHandler);
         }
         else if(MapManager.currentMap.id == 507)
         {
            _map.conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
         }
         else if(MapManager.currentMap.id == 40)
         {
            _map.conLevel["bulaikeMC"].removeEventListener(MouseEvent.CLICK,bulaikeMCHandler);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
         }
         else if(MapManager.currentMap.id == 43)
         {
            MainManager.selfVisible = true;
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
         }
         _map = null;
      }
   }
}
