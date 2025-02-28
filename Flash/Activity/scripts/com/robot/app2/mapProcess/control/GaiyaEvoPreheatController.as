package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GaiyaEvoPreheatController
   {
      
      private static var _map:int;
      
      private static var _anim:MovieClip;
      
      private static var _isPlay419:Boolean;
      
      private static var _isPlay1074:Boolean;
      
      private static var _isWin:Boolean;
       
      
      public function GaiyaEvoPreheatController()
      {
         super();
      }
      
      public static function start(param1:int) : void
      {
         _map = param1;
         if(_map == 419)
         {
            KTool.changeMapWithCallBack(10895,init419);
         }
         else if(_map == 1074)
         {
            KTool.changeMapWithCallBack(10896,init1074);
         }
         else if(_map == 411)
         {
            KTool.changeMapWithCallBack(10897,init411);
         }
      }
      
      private static function init419() : void
      {
         var isPlay:Boolean = false;
         var onClick:Function = null;
         var showTop:Function = null;
         var fight:Function = null;
         var onFightOver:Function = null;
         var onRemove:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            var story:Array = null;
            var storyPlayer:TaskStoryPlayer = null;
            var e:MouseEvent = param1;
            if(e.target.name == "gaiya")
            {
               MapManager.currentMap.topLevel.visible = false;
               story = [[TaskStoryPlayer.DIALOG,[NPC.GAIYA_EVO,["我的朋友！你终于来了！我……我从来没见过那个叫修的家伙，他的言辞，让我非常的不满！"],["哦？他说了什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA_EVO,["他居然说，我超进化后的能力根本不够看！说我自大！狂妄！自以为可以击败天下所有精灵，实则我所真正掌握的力气根本连个蚂蚁都捏不死！"],["那我能帮你做什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA_EVO,["哼，我怎么可能会搭理这种穿着古怪的家伙，他嘴里的言论更是荒谬至极！我决定好好教训他一顿！然后你帮我抬走他就好。"],["哎哎哎！等等！"]]],[TaskStoryPlayer.MAP_MOVIE,[_anim,1,"mc1"]]];
               storyPlayer = new TaskStoryPlayer();
               storyPlayer.addStory(story);
               storyPlayer.storyEndCallback = function():void
               {
                  _isPlay419 = true;
                  storyPlayer.destory();
                  NpcDialog.show(NPC.HUGH,["既然你这么想打，那就爆发出你最强的力量吧！"],["好，且看这一招！（你将使用战神进入对战）","等一下！"],[fight,showTop]);
               };
               CommonUI.removeYellowExcal(MapManager.currentMap.topLevel);
               storyPlayer.start();
            }
            else if(e.target.name == "xiu")
            {
               NpcDialog.show(NPC.HUGH,["既然你这么想打，那就爆发出你最强的力量吧！"],["好，且看这一招！（你将使用战神进入对战）","等一下！"],[fight,showTop]);
            }
         };
         showTop = function():void
         {
            MapManager.currentMap.topLevel.visible = true;
         };
         fight = function():void
         {
            CommonUI.removeYellowExcal(MapManager.currentMap.topLevel);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            FightManager.tryFight(231,[13582,13583,13584,13585,15783]);
         };
         onFightOver = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               NpcDialog.show(NPC.HUGH,["咳咳……果然！我果然找到了！原谅我之前的无礼，现在我需要对你讲述一个事情。"],["快说！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_evo_preheat_full_1"),function():void
                  {
                     ModuleManager.showAppModule("GaiyaEvoPreheatPanel");
                  });
               }]);
            }
            else
            {
               init419();
            }
         };
         onRemove = function(param1:Event):void
         {
            _anim = null;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,onClick);
            param1.currentTarget.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         };
         if(!_anim)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("gaiya_evo_preheat_anim"),function(param1:MovieClip):void
            {
               _anim = param1;
               MapManager.currentMap.controlLevel.addChild(_anim);
               _anim.addEventListener(MouseEvent.CLICK,onClick);
               _anim.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
               if(!_isPlay419)
               {
                  _anim.gotoAndStop(1);
                  CommonUI.addYellowExcal(MapManager.currentMap.topLevel,693,167);
               }
               else
               {
                  _anim.gotoAndStop(1);
                  _anim.mc1.gotoAndStop(_anim.mc1.totalFrames);
                  CommonUI.addYellowExcal(MapManager.currentMap.topLevel,649,136);
               }
            });
         }
      }
      
      private static function init1074() : void
      {
         var _bar:MovieClip = null;
         var onClick:Function = null;
         var fight:Function = null;
         var onRemove:Function = null;
         var update:Function = function(param1:Function = null):void
         {
            var func:Function = param1;
            KTool.getMultiValue([2317],function(param1:Array):void
            {
               if(!_bar)
               {
                  _bar = MapManager.currentMap.libManager.getMovieClip("bloodBar");
               }
               _bar.x = 635;
               _bar.y = 145;
               _bar.txt.text = param1[0] + "/100";
               _bar.mcBar.mcBar.gotoAndStop(param1[0] + 1);
               MapManager.currentMap.controlLevel.addChild(_bar);
               if(func != null)
               {
                  func(param1[0]);
               }
            });
         };
         onClick = function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            if(e.target.name == "dragon_end" && !_isPlay1074)
            {
               CommonUI.removeYellowExcal(MapManager.currentMap.topLevel);
               NpcDialog.show(NPC.SKY_GOD_DRAGON,["你是来帮助战神盖亚的吗？虽然贵为战神，但却连龙脉第一层的力量也抵挡不住，我有点失望。"],["无上神龙，我要如何帮助他？"],[function():void
               {
                  _isPlay1074 = true;
                  NpcDialog.show(NPC.SKY_GOD_DRAGON,["你不必担心，如果正如遗迹流浪者修所说，他拥有那种奇特的天赋，那他就永不会倒下，哈哈！那是种无比强大的力量，你要做的，就是用你的精灵！把盖亚身体内的毅力逼到极限！"],["好！"]);
                  CommonUI.addYellowExcal(MapManager.currentMap.topLevel,635,190);
               }]);
            }
            else if(e.target.name == "gaiya" && _isPlay1074)
            {
               NpcDialog.show(NPC.GAIYA_EVO,["……极限……极限到底在哪里…你尽管来吧！"],["为了见证你的极限！我动手了！（进入对战）","我不忍心啊。"],[fight]);
            }
            else if(e.target.name == "dragon_end" && _isPlay1074)
            {
               NpcDialog.show(NPC.SKY_GOD_DRAGON,["你不必担心，如果正如遗迹流浪者修所说，他拥有那种奇特的天赋，那他就永不会倒下，哈哈！那是种无比强大的力量，你要做的，就是用你的精灵！把盖亚身体内的毅力逼到极限！"],["好！"]);
            }
         };
         fight = function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               init1074();
            });
            FightManager.fightNoMapBoss("",3932);
         };
         onRemove = function(param1:Event):void
         {
            _anim = null;
            _bar = null;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,onClick);
            param1.currentTarget.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         };
         if(!_anim)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("gaiya_evo_preheat_anim"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               _anim = mc;
               MapManager.currentMap.controlLevel.addChild(_anim);
               _anim.addEventListener(MouseEvent.CLICK,onClick);
               _anim.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
               if(!_isPlay1074)
               {
                  _anim.gotoAndStop(2);
                  AnimateManager.playMcAnimate(_anim,2,"mc2",function():void
                  {
                     update();
                     CommonUI.addYellowExcal(MapManager.currentMap.topLevel,213,203);
                  });
               }
               else
               {
                  _anim.gotoAndStop(2);
                  _anim.mc2.gotoAndStop(_anim.mc2.totalFrames);
                  CommonUI.addYellowExcal(MapManager.currentMap.topLevel,635,190);
                  update(function(param1:int):void
                  {
                     var val:int = param1;
                     if(val >= 100)
                     {
                        DisplayUtil.removeForParent(_bar);
                        CommonUI.removeYellowExcal(MapManager.currentMap.topLevel);
                        AnimateManager.playMcAnimate(_anim,3,"mc3",function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_evo_preheat_full_2"),function():void
                           {
                              DisplayUtil.removeForParent(_anim);
                              ModuleManager.showAppModule("GaiyaEvoPreheatPanel");
                           });
                        });
                     }
                     if(val > 0)
                     {
                        _isPlay1074 = true;
                     }
                  });
               }
            });
         }
      }
      
      private static function init411() : void
      {
         var _boss:int = 0;
         var onClick:Function = null;
         var isWin:Boolean = false;
         var fight:Function = null;
         var onRemove:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            if(param1.target.name == "dragon")
            {
               _boss = 3934;
               NpcDialog.show(NPC.RUIERSI,["极致的力量！是我毕生所追去的！你根本不配成为“力量神谕”的获得者！盖亚，我体内熊熊的斗战正在燃烧，我要在这里，把你狠狠击败！"],["我支持你！（进入战斗）","稍等下！"],[fight]);
            }
            else if(param1.target.name == "gaiya")
            {
               _boss = 3933;
               NpcDialog.show(NPC.GAIYA_EVO,["我不管什么力量不力量，哥哥，你一定要这么做的话，我就必须奉陪到底了！"],["我支持你！（进入战斗）","稍等下！"],[fight]);
            }
         };
         fight = function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  _isWin = true;
               }
               init411();
            });
            FightManager.fightNoMapBoss("",_boss);
         };
         onRemove = function(param1:Event):void
         {
            _anim = null;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,onClick);
            param1.currentTarget.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
         };
         if(!_anim)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("gaiya_evo_preheat_anim"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               _anim = mc;
               MapManager.currentMap.controlLevel.addChild(_anim);
               _anim.addEventListener(MouseEvent.CLICK,onClick);
               _anim.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
               _anim.gotoAndStop(4);
               if(_isWin)
               {
                  AnimateManager.playMcAnimate(_anim,5,"mc5",function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_evo_preheat_full_3"),function():void
                     {
                        DisplayUtil.removeForParent(_anim);
                        ModuleManager.showAppModule("GaiyaEvoPreheatPanel");
                     });
                  });
               }
            });
         }
      }
   }
}
