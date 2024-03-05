package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_821;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Dictionary;
   import flash.utils.getTimer;
   import org.taomee.utils.DisplayUtil;
   
   public class Task821
   {
      
      private static var _map:BaseMapProcess;
      
      private static var fightGang:FightGang;
      
      private static var markTime:int;
      
      private static var roofDic:Dictionary = new Dictionary();
      
      private static var finishCount:int = 0;
      
      private static var dragItem:MovieClip;
       
      
      public function Task821()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TaskController_821.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["door_guide"].visible = true;
         }
      }
      
      public static function showBLZguide() : void
      {
         _map.topLevel["entryGuide"].visible = true;
      }
      
      public static function initForMap690(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_821.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               initBLZboss();
            }
         });
      }
      
      public static function showBLZboss() : void
      {
         var mc:MovieClip = _map.conLevel["task821mc"];
         mc.visible = true;
         AnimateManager.playMcAnimate(mc,1,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["佐格，艾利逊，你们两个蠢货！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ZOG_20111027,[MainManager.actorInfo.formatNick + "，你以为我们不知道吗？想去新泽部落拿元素之星，没门！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALLISON_20111027,["嘿嘿，土元素之星是我们的啦！ "],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DANDI,["可恶！看来，海盗已经知道推特星的秘密了。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["丹迪，我们必须赶紧干掉这两个挡路的家伙，要不然没法去新泽部落。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.DANDI,["战斗开始！"],["（与佐格、艾利逊对战）"],[function():void
                           {
                              TasksManager.complete(TaskController_821.TASK_ID,0,function():void
                              {
                                 initBLZboss();
                              });
                           }]);
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function initBLZboss() : void
      {
         var _loc1_:MovieClip = null;
         _loc1_ = _map.conLevel["task821mc"];
         _loc1_.visible = true;
         _loc1_.buttonMode = true;
         _loc1_.gotoAndStop(2);
         _loc1_.addEventListener(MouseEvent.CLICK,fightWithBlZboss);
         _map.typeLevel["roadMask"].visible = true;
         _map.typeLevel["roadMask"].mouseEnabled = true;
         MapManager.currentMap.makeMapArray();
      }
      
      private static function fightWithBlZboss(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(710,220),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("佐格、艾利逊",1);
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var mc:MovieClip = null;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            mc = _map.conLevel["task821mc"];
            mc.visible = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_821_1"),function():void
            {
               NpcDialog.show(NPC.SEER,["海盗突然出来挡路，看来新泽部落现在一定有麻烦！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["希望杰西他们平安无事，元素之星绝不能落入那些坏蛋手中，要不然推特星可就真的危险了！"],["抓紧时间，出发，新泽部落！"],[function():void
                  {
                     TasksManager.complete(TaskController_821.TASK_ID,1,function():void
                     {
                        _map.conLevel["guide694"].visible = true;
                     });
                  }]);
               });
            });
            _map.typeLevel["roadMask"].visible = false;
            _map.typeLevel["roadMask"].mouseEnabled = false;
            MapManager.currentMap.makeMapArray();
         }
         else
         {
            NpcDialog.show(NPC.ZOG_20111027,["哈哈哈，别想去新泽部落救场啦，乖乖的认输吧！"],["可恶！我一定要打倒你！"]);
         }
      }
      
      public static function initForMap694(param1:BaseMapProcess) : void
      {
         var roof1:MovieClip = null;
         var roof2:MovieClip = null;
         var map:BaseMapProcess = param1;
         _map = map;
         roof1 = _map.conLevel["roof_1"];
         roof2 = _map.conLevel["roof_2"];
         if(TasksManager.getTaskStatus(TaskController_821.TASK_ID) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(mc1);
            DisplayUtil.removeForParent(mc2);
            roof1.gotoAndStop(2);
            roof2.gotoAndStop(2);
         }
         else if(TasksManager.getTaskStatus(TaskController_821.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            DisplayUtil.removeForParent(mc1);
            DisplayUtil.removeForParent(mc2);
            roof1.gotoAndStop(3);
            roof2.gotoAndStop(3);
            NpcController.npcVisible = false;
         }
         else
         {
            NpcController.npcVisible = false;
            roof1.gotoAndStop(3);
            roof2.gotoAndStop(3);
            TasksManager.getProStatusList(TaskController_821.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  mc2.gotoAndStop(2);
                  mc1.buttonMode = true;
                  mc1.addEventListener(MouseEvent.CLICK,startFightGang);
                  _map.typeLevel["roadMask"].visible = true;
                  _map.typeLevel["roadMask"].mouseEnabled = true;
                  MapManager.currentMap.makeMapArray();
                  ToolBarController.showOrHideAllUser(false);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  mc2.gotoAndStop(2);
                  prepareForFigthAiwen();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  initSaveFairy();
               }
               else
               {
                  DisplayUtil.removeForParent(mc1);
                  DisplayUtil.removeForParent(mc2);
                  if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
                  {
                     _map.conLevel["dandi"].visible = true;
                     NpcController.npcVisible = true;
                     roof1.gotoAndStop(2);
                     roof2.gotoAndStop(2);
                  }
               }
            });
         }
      }
      
      private static function startFightGang(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(360,290),function():void
         {
            mc1.removeEventListener(MouseEvent.CLICK,startFightGang);
            NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，我们来的正是时候！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["海盗，我要打得你们屁滚尿流！"],["（用头部射击消灭海盗）"],[function():void
               {
                  mc1.gotoAndStop(2);
                  _map.typeLevel["roadMask"].visible = false;
                  _map.typeLevel["roadMask"].mouseEnabled = false;
                  MapManager.currentMap.makeMapArray();
                  if(fightGang == null)
                  {
                     fightGang = new FightGang(120,100,5);
                     fightGang.createOgre(2520,new Point(329,415),10,10);
                     fightGang.createOgre(2520,new Point(407,383),10,10);
                     fightGang.createOgre(2520,new Point(470,341),10,10);
                     fightGang.createOgre(2520,new Point(458,422),10,10);
                     fightGang.beginFight().addResponse(function():void
                     {
                        fightGang.destroyFight();
                        fightGang = null;
                        TasksManager.complete(TaskController_821.TASK_ID,2,function():void
                        {
                           AnimateManager.playMcAnimate(mc1,2,"mc",function():void
                           {
                              prepareForFigthAiwen();
                           });
                        });
                     },function():void
                     {
                        NpcDialog.show(NPC.SEER,["可恶！我不能就这么认输，冲啊！"],["（用头部射击消灭海盗）"],[function():void
                        {
                           fightGang.beginFight();
                        }]);
                     });
                  }
               }]);
            });
         });
      }
      
      private static function prepareForFigthAiwen() : void
      {
         mc1.gotoAndStop(3);
         mc1.buttonMode = true;
         mc1.addEventListener(MouseEvent.CLICK,fightWithAiwen);
      }
      
      private static function fightWithAiwen(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(485,320),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightAiwenComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightAiwenComplete);
            FightManager.fightWithBoss("艾文",0);
         });
      }
      
      private static function onFightAiwenComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightAiwenComplete);
         mc1.removeEventListener(MouseEvent.CLICK,fightWithAiwen);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_821_2"),function():void
         {
            initSaveFairy();
            TasksManager.complete(TaskController_821.TASK_ID,3,function():void
            {
               NpcDialog.show(NPC.DANDI,["海盗邪灵都已经入侵新泽部落了，怎么没有看到杰西呢？不对劲！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["丹迪，那边有一个伯利兹精灵被石块给压住了，我们得赶紧把它救出来。"],["（持续点击石块）"],[function():void
                  {
                  }]);
               });
            });
         });
      }
      
      private static function initSaveFairy() : void
      {
         DisplayUtil.removeForParent(mc1);
         mc2.addEventListener(MouseEvent.CLICK,onSaveFairy);
         mc2.addEventListener(Event.ENTER_FRAME,checkProcess);
         mc2.gotoAndStop(1);
         mc2.buttonMode = true;
         markTime = getTimer();
         _map.conLevel["guideMC"].visible = true;
      }
      
      private static function onSaveFairy(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var bar:MovieClip = _map.conLevel["bloodMC"]["perMC"];
         var crtFrame:int = bar.currentFrame + 10;
         if(crtFrame > 99)
         {
            bar.gotoAndStop(100);
            clearSaveListeners();
            DisplayUtil.removeForParent(_map.conLevel["bloodMC"]);
            DisplayUtil.removeForParent(_map.conLevel["guideMC"]);
            AnimateManager.playMcAnimate(mc2,2,"mc",function():void
            {
               mc2.gotoAndStop(3);
               NpcDialog.show(NPC.ALEILEI,["谢谢你，那些坏蛋把我们新泽部落搞得乱七八糟，我的房子也被打坏了 ，呜呜……"],["别难过，修房子我可是经验丰富，看我的。（点击场景里的房屋零件）"],[function():void
               {
                  mc2.buttonMode = false;
                  initForHouseFix();
               }]);
            });
         }
         else if(crtFrame == 11)
         {
            bar.parent.visible = true;
            bar.gotoAndStop(crtFrame);
         }
         else
         {
            bar.gotoAndStop(crtFrame);
         }
      }
      
      private static function checkProcess(param1:Event) : void
      {
         var _loc2_:int = getTimer() - markTime;
         if(_loc2_ < 100)
         {
            return;
         }
         _loc2_ *= 0.01;
         var _loc3_:MovieClip = _map.conLevel["bloodMC"]["perMC"];
         var _loc4_:int = _loc3_.currentFrame - _loc2_;
         markTime = getTimer();
         if(_loc4_ < 0)
         {
            _loc4_ = 0;
         }
         _loc3_.gotoAndStop(_loc4_);
      }
      
      private static function clearSaveListeners() : void
      {
         if(mc2)
         {
            mc2.removeEventListener(MouseEvent.CLICK,onSaveFairy);
            mc2.removeEventListener(Event.ENTER_FRAME,checkProcess);
         }
      }
      
      public static function initForHouseFix() : void
      {
         var initRoof:Function = function(param1:MovieClip):void
         {
            param1.gotoAndStop(1);
            param1.buttonMode = true;
            param1.addEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
            roofDic[param1] = new Point(param1.x,param1.y);
         };
         var rf1:MovieClip = _map.conLevel["roof_1"];
         var rf2:MovieClip = _map.conLevel["roof_2"];
         finishCount = 0;
         initRoof(rf1);
         initRoof(rf2);
         _map.conLevel.addEventListener(MouseEvent.MOUSE_UP,onRoofMSUp);
      }
      
      private static function onRoofMSDown(param1:MouseEvent) : void
      {
         param1.currentTarget.startDrag();
         dragItem = MovieClip(param1.currentTarget);
      }
      
      private static function onRoofMSUp(param1:MouseEvent) : void
      {
         var index:String;
         var hit:MovieClip;
         var e:MouseEvent = param1;
         var clearRoof:Function = function(param1:MovieClip):void
         {
            param1.gotoAndStop(2);
            param1.buttonMode = false;
            param1.removeEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
            ++finishCount;
         };
         if(!dragItem)
         {
            return;
         }
         index = dragItem.name.charAt(5);
         hit = _map.conLevel["roof_hit_" + index];
         if(hit.hitTestObject(dragItem))
         {
            clearRoof(dragItem);
            if(finishCount == 2)
            {
               onFixHouseComp();
            }
         }
         dragItem.stopDrag();
         dragItem.x = roofDic[dragItem].x;
         dragItem.y = roofDic[dragItem].y;
         dragItem = null;
      }
      
      private static function onFixHouseComp() : void
      {
         TasksManager.complete(TaskController_821.TASK_ID,4,function():void
         {
            AnimateManager.playMcAnimate(mc2,3,"mc",function():void
            {
               DisplayUtil.removeForParent(mc2);
               NpcController.npcVisible = true;
               _map.conLevel["dandi"].visible = true;
            });
         });
      }
      
      public static function hideDandiFor694() : void
      {
         _map.conLevel["dandi"].visible = false;
      }
      
      private static function get mc1() : MovieClip
      {
         return _map.conLevel["task821mc1"];
      }
      
      private static function get mc2() : MovieClip
      {
         return _map.conLevel["task821mc2"];
      }
      
      public static function destroy() : void
      {
         var _loc1_:* = undefined;
         if(MapManager.currentMap.id == 690)
         {
            _map.conLevel["task821mc"].removeEventListener(MouseEvent.CLICK,fightWithBlZboss);
         }
         else if(MapManager.currentMap.id == 694)
         {
            if(mc1)
            {
               mc1.removeEventListener(MouseEvent.CLICK,startFightGang);
               mc1.removeEventListener(MouseEvent.CLICK,fightWithAiwen);
            }
            clearSaveListeners();
            for(_loc1_ in roofDic)
            {
               _loc1_.removeEventListener(MouseEvent.MOUSE_DOWN,onRoofMSDown);
               delete roofDic[_loc1_];
            }
            _map.conLevel.removeEventListener(MouseEvent.MOUSE_UP,onRoofMSUp);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
            ToolBarController.showOrHideAllUser(true);
         }
         _map = null;
      }
   }
}
