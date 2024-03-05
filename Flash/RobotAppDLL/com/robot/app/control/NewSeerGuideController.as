package com.robot.app.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.panel.NewSeerGuidePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BonusInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.RectangleMask;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerGuideController
   {
      
      private static var transIconObj:Object = {};
      
      private static var stageIcons:Object = {
         "guideStart":{
            "onStart":["new_seer_task_icon","newseer_sign"],
            "onEnd":[]
         },
         "guideStage":{
            "onStart":[],
            "onEnd":[]
         },
         "taskStage":{
            "onStart":["MonthVip_Icon"],
            "onEnd":["new_seer_task_icon"]
         }
      };
      
      public static var mapHasSub:Boolean = false;
      
      private static var _isUseDrug:Boolean = false;
      
      private static var currentIconCnt:int = 0;
      
      private static var _mapId:int;
      
      private static var _enterFun:Function;
      
      private static var _isSwitching:Boolean = false;
      
      private static const NEWSEER_STAT:Array = ["第4步完成水之试炼任务一：打皮皮","第5步完成水之试炼任务二：蘑菇怪","第6步完成水之试炼战胜鲁斯王","第7步完成火之试炼任务一：寻找试炼之塔","第8步完成水之试炼任务二：雷小伊40级","第9步完成水之试炼战胜魔焰猩猩","第10步完成草之试炼任务一：对战使用药剂","第11步完成水之试炼任务二：钢牙鲨","第12步完成水之试炼战胜丽莎布布","第13步完成进化吧--雷神任务一","第14步完成进化吧--雷神任务二"];
       
      
      public function NewSeerGuideController()
      {
         super();
      }
      
      public static function startGuide() : void
      {
         KTool.getBitSet([12817],function(param1:Array):void
         {
            if(param1[0] <= 0)
            {
               changeMapDo(10018,startPreTask);
            }
            else
            {
               changeMapDo(10017,guideStart);
            }
         });
      }
      
      private static function guideStart() : void
      {
         var isIconProcessed:Boolean = false;
         isIconProcessed = false;
         EventManager.addEventListener("allIconParsed",function(param1:*):void
         {
            EventManager.removeEventListener("allIconParsed",arguments.callee);
            if(isIconProcessed)
            {
               return;
            }
            isIconProcessed = true;
            addIcons();
         });
         setTimeout(function():void
         {
            if(isIconProcessed)
            {
               return;
            }
            isIconProcessed = true;
            addIcons();
         },3000);
         addListen();
         BonusController.addIgnore(481);
         ToolBarController.friendOff();
         ToolBarController.vipOff();
         ToolBarController.homeOff();
         ToolBarController.shopOff();
      }
      
      private static function addListen() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.USE_PET_ITEM,onUseDrug);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,onPetImprove);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMap);
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         if(Boolean(MapManager.currentMap) && [108,985].indexOf(MapManager.currentMap.id) != -1)
         {
            getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         if(_isUseDrug)
         {
            FightDispatcher.removeEventListener(PetFightEvent.USE_PET_ITEM,onUseDrug);
            _isUseDrug = false;
            getDefinitionByName("com.robot.app2.control.newSeer.NewSeerGrassTrain").completeStep1();
         }
      }
      
      private static function onUseDrug(param1:PetFightEvent) : void
      {
         _isUseDrug = true;
      }
      
      private static function onPetImprove(param1:PetEvent) : void
      {
         check_pet();
      }
      
      public static function check_pet(param1:Function = null) : void
      {
         var func:Function = param1;
         var pets:Array = PetManager.getBagMap(true).filter(function(param1:PetListInfo, param2:int, param3:Array):Boolean
         {
            return param1.id == 2311 && param1.level >= 40;
         });
         if(pets.length > 0)
         {
            PetManager.removeEventListener(PetEvent.UPDATE_INFO,onPetImprove);
            getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFireTrain").completeStep2(pets[0].catchTime,func);
         }
      }
      
      private static function addIcons() : void
      {
         addLeftIcon(stageIcons.guideStart.onStart);
         updateIcons();
      }
      
      private static function clearLeftIcon(param1:Array) : void
      {
         var iconArr:Array = param1;
         iconController.eachIcon(function(param1:*):void
         {
            if(!param1)
            {
               return;
            }
            if(iconArr.indexOf(param1.url) != -1 && transIconObj.hasOwnProperty(param1.url))
            {
               param1.ui.x = transIconObj[param1.url].x;
               param1.ui.y = transIconObj[param1.url].y;
               delete transIconObj[param1.url];
               --currentIconCnt;
            }
         });
      }
      
      private static function showRightIcons() : void
      {
         iconController.eachIcon(function(param1:*):void
         {
            if(!param1)
            {
               return;
            }
            if(param1.direction == "right" || param1.direction == "right_side")
            {
               if(param1.ui)
               {
                  param1.ui.y -= 660;
               }
            }
         });
      }
      
      private static function restoreRightIcons() : void
      {
         iconController.eachIcon(function(param1:*):void
         {
            if(!param1)
            {
               return;
            }
            if(param1.direction == "right" || param1.direction == "right_side")
            {
               if(param1.ui)
               {
                  param1.ui.y += 660;
               }
            }
         });
      }
      
      private static function addLeftIcon(param1:Array) : void
      {
         var iconArr:Array = param1;
         var cnt:int = 0;
         iconController.eachIcon(function(param1:*):void
         {
            if(!param1)
            {
               return;
            }
            if(iconArr.indexOf(param1.url) != -1)
            {
               transIconObj[param1.url] = {
                  "x":param1.ui.x,
                  "y":param1.ui.y
               };
               param1.ui.x = (currentIconCnt + iconArr.indexOf(param1.url)) * 60 + 10;
               param1.ui.y = 12 - 660;
               ++cnt;
            }
            if(Boolean(param1.ui) && !DisplayUtil.hasParent(param1.ui))
            {
               LevelManager.iconLevel.addChild(param1.ui);
            }
         });
         currentIconCnt += cnt;
      }
      
      private static function get iconController() : *
      {
         return getDefinitionByName("com.robot.app2.systems.iconLevel.IconController");
      }
      
      public static function hideSignIcon() : void
      {
         iconController.hideIcon("newseer_sign");
      }
      
      private static function updateIcons() : void
      {
         if(NewSeerTaskController.isNewSeerTaskDone)
         {
            ToolBarController.guideShine(false);
            NewSeerGuidePanel.destory();
            LevelManager.iconLevel.y = 0;
            clearLeftIcon(stageIcons.taskStage.onEnd);
            restoreRightIcons();
         }
         else if(NewSeerTaskController.isNewSeerGuideDone)
         {
            ToolBarController.guideShine(false);
            NewSeerGuidePanel.destory();
            LevelManager.iconLevel.y = 660;
            clearLeftIcon(stageIcons.guideStage.onEnd);
            addLeftIcon(stageIcons.taskStage.onStart);
            showRightIcons();
            ToolBarController.friendOn();
            ToolBarController.vipOn();
            ToolBarController.homeOn();
            ToolBarController.shopOn();
         }
         else
         {
            LevelManager.iconLevel.y = 660;
            NewSeerGuidePanel.setup();
            ToolBarController.guideShine(true);
         }
      }
      
      private static function onIconHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TreasureNewPanel"),"正在加载....");
      }
      
      public static function changeMapDo(param1:int, param2:Function, param3:Function = null) : void
      {
         var mapId:int = param1;
         var enterFunc:Function = param2;
         var leaveFunc:Function = param3;
         if(_isSwitching == true)
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            if(MapManager.currentMap.id == mapId)
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               if(null != enterFunc)
               {
                  enterFunc.call();
               }
               if(null != leaveFunc)
               {
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                  {
                     if(MapManager.currentMap.id != mapId)
                     {
                        if(null != leaveFunc)
                        {
                           leaveFunc.call();
                        }
                        MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     }
                  });
               }
            }
         });
         if(mapId > 10000)
         {
            MapManager.changeLocalMap(mapId);
         }
         else
         {
            MapManager.changeMap(mapId);
         }
         _isSwitching = true;
         setTimeout(function():void
         {
            _isSwitching = false;
         },4000);
      }
      
      private static function startPreTask() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","进入剧情动画的",StatManager.USER_CHARACTER);
         KTool.showMapAllPlayerAndMonster(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("newseer_2014_leixiaoyi"),function():void
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_10018_newseer_2014_pretask"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               MapManager.currentMap.topLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  var dialog_cls:*;
                  StatManager.sendStat2014("5月全新新手任务  ","看完剧情动画的",StatManager.USER_CHARACTER);
                  StatManager.sendStat2014("新手数据监控","第1步看完全屏动画+场景动画","新手收费");
                  dialog_cls = getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFlyDialog");
                  dialog_cls.addDialog("saier","怎么才能让你恢复呢？");
                  dialog_cls.addDialog("paite","看来只有最古老的水火草的能量才能帮助雷伊恢复了。");
                  dialog_cls.addDialog("saier","水火草的能量？只要能够帮助雷伊回复，让我做什么都愿意！");
                  dialog_cls.addDialog("xiaoen","好，我现在把小助手NoNo给你，希望你能用勇气和智慧突破艰难险阻，同雷小伊一起成长。");
                  dialog_cls.addDialog("paite","现在我就为你开启试炼之路，赛尔，加油吧！");
                  dialog_cls.start(function():void
                  {
                     StatManager.sendStat2014("新手数据监控","第2步完成与派特博士的对话，获得雷小伊","新手收费");
                     KTool.showMapAllPlayerAndMonster(true);
                     BonusController.addDelay(503);
                     SocketConnection.sendWithCallback(CommandID.COMMAND_4548,function():void
                     {
                        var info:BonusInfo = null;
                        info = BonusController.getDelayBonusInfo(503);
                        PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                        {
                           PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                           if(info.petID == 2311 && info.captime > 0)
                           {
                              PetManager.setDefault(info.captime);
                           }
                        });
                        changeMapDo(10017,function():void
                        {
                           BonusController.showDelayBonus(503);
                           BonusController.removeDelay(503);
                           guideStart();
                        });
                     },503,1);
                  });
               });
            });
         });
      }
      
      private static function onClickIcon(param1:Event) : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","点击试炼之路icon的",StatManager.USER_CHARACTER);
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
      }
      
      private static function onClickSign(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerSignPanel"));
      }
      
      public static function finishTask() : void
      {
      }
      
      public static function destroy() : void
      {
         updateIcons();
         MapNamePanel.showExp();
         NewSeerGuidePanel.destory();
         BonusController.removeIgnore(481);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.removeEventListener(PetFightEvent.USE_PET_ITEM,onUseDrug);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,onPetImprove);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMap);
      }
      
      public static function get isNewSeer() : Boolean
      {
         return NewSeerTaskController.isNewSeer;
      }
      
      public static function startWaterTrain_1() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").start(1);
      }
      
      public static function startWaterTrain_2() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").start(2);
      }
      
      public static function startWaterTrain_3() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerWaterTrain").start(3);
      }
      
      public static function startFireTrain_1() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFireTrain").start(1);
      }
      
      public static function startFireTrain_2() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFireTrain").start(2);
      }
      
      public static function startFireTrain_3() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFireTrain").start(3);
      }
      
      public static function startGrassTrain_1() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerGrassTrain").start(1);
      }
      
      public static function startGrassTrain_2() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerGrassTrain").start(2);
      }
      
      public static function startGrassTrain_3() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerGrassTrain").start(3);
      }
      
      public static function startLeiyiEvo_1() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerLeiyiEvo").start(1);
      }
      
      public static function startLeiyiEvo_2() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerLeiyiEvo").start(2);
      }
      
      public static function startLeiyiEvo_3() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerLeiyiEvo").start(3);
      }
      
      public static function startLeiyiEvo_4() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerLeiyiEvo").start(4);
      }
      
      public static function startLeiyiEvo_5() : void
      {
         getDefinitionByName("com.robot.app2.control.newSeer.NewSeerLeiyiEvo").start(5);
      }
      
      public static function completeTask(param1:int, param2:Function = null) : void
      {
         var ten:int;
         var digit:int;
         var index:int;
         var phase:int = param1;
         var func:Function = param2;
         NewSeerGuidePanel.update();
         if(phase == 33)
         {
            setNewSeerGuideDone();
         }
         if(phase == 21)
         {
            setLeiyiLevel();
         }
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getAppRes("newSeer/complete_task"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.gotoAndStop("phase_" + phase);
            MainManager.getStage().addChild(mc);
            TweenLite.from(mc,1,{
               "x":0,
               "y":560,
               "onComplete":function():void
               {
                  setTimeout(function():void
                  {
                     DisplayUtil.removeForParent(mc);
                     if(func != null)
                     {
                        func();
                     }
                     LevelManager.openMouseEvent();
                     mc = null;
                     func = null;
                  },2000);
               }
            });
         });
         ten = int(phase / 10);
         digit = phase % 10;
         index = (ten - 1) * 3 + (digit - 1);
         if(index >= 0 && index < NEWSEER_STAT.length)
         {
            StatManager.sendStat2014("新手数据监控",NEWSEER_STAT[index],"新手收费");
         }
      }
      
      private static function setLeiyiLevel() : void
      {
         var infos:Array = PetManager.getBagPetsById(2311);
         if(infos.length <= 0 || infos[0].level >= 39)
         {
            return;
         }
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_LEIXIAOYI_EVO,[1,infos[0].catchTime],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            PetManager.upDate();
         });
      }
      
      public static function setNewSeerGuideDone() : void
      {
         TasksManager.setTaskStatus(3007,TasksManager.COMPLETE);
         updateIcons();
         getNono();
      }
      
      private static function getNono() : void
      {
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_GET_NONO,null,function(param1:*):void
         {
            MainManager.actorInfo.hasNono = true;
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
         });
      }
      
      public static function maskGuide(param1:int, param2:Function = null) : void
      {
         var phase_no:int = param1;
         var func:Function = param2;
         RectangleMask.addEventListener(RectangleMask.GUIDE_NEXT,function(param1:DynamicEvent):void
         {
            if(param1.paramObject >= phase_no)
            {
               RectangleMask.destroy();
               RectangleMask.removeEventListener(RectangleMask.GUIDE_NEXT,arguments.callee);
            }
            if(param1.paramObject == phase_no)
            {
               RectangleMask.removeEventListener(RectangleMask.GUIDE_NEXT,arguments.callee);
               if(null != func)
               {
                  func.call();
               }
            }
         });
         RectangleMask.addEventListener(RectangleMask.CLICK_NEXT,function(param1:DynamicEvent):void
         {
            if(param1.paramObject >= phase_no)
            {
               RectangleMask.removeEventListener(RectangleMask.CLICK_NEXT,arguments.callee);
               RectangleMask.destroy();
            }
         });
      }
      
      public static function completeAll() : void
      {
         var dialog_cls:* = undefined;
         StatManager.sendStat2014("5月全新新手任务  ","触发引导完结动画的",StatManager.USER_CHARACTER);
         KTool.showMapAllPlayerAndMonster(false);
         dialog_cls = getDefinitionByName("com.robot.app2.control.newSeer.NewSeerFlyDialog");
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10017_leiyi_bubble"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               ResourceManager.getResource(ClientConfig.getAppRes("newSeer/icon_shine"),function(param1:MovieClip):void
               {
                  var mc2:MovieClip = param1;
                  dialog_cls.addDialog("leiyi",MainManager.actorInfo.nick + "，感谢你为我找回了能量，今后你还有很长的路要走，现在我将为你开启赛尔号的精彩内容。");
                  dialog_cls.addDialog("leiyi","勇者之路中你可以找到很多强力的对手来磨练自己。任务档案可以帮助你了解更多赛尔号的故事。");
                  dialog_cls.start(function():void
                  {
                     LevelManager.tipLevel.addChild(mc2);
                     AnimateManager.playMcAnimate(mc2,"spt_task","mc",function():void
                     {
                        mc2.visible = false;
                        dialog_cls.addDialog("leiyi","精彩活动中可以找到赛尔号每周的精彩内容。");
                        dialog_cls.start(function():void
                        {
                           mc2.visible = true;
                           AnimateManager.playMcAnimate(mc2,"week_icon","mc",function():void
                           {
                              dialog_cls.addDialog("leiyi",MainManager.actorInfo.nick + "，努力锻炼你的精灵吧，尤其是你已经获得的水、火、草三主宠，");
                              dialog_cls.addDialog("leiyi","好好培养他们，他们将会为你之后旅途提供强大的支持。");
                              dialog_cls.addDialog("leiyi","现在，推荐你先进入成长之路，熟悉赛尔号上其他的内容，");
                              dialog_cls.addDialog("leiyi","成长之路里也有很丰厚的奖励，千万不要错过！");
                              dialog_cls.start(function():void
                              {
                                 DisplayUtil.removeForParent(mc);
                                 mc = null;
                                 afterCompleteAll(mc2);
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function afterCompleteAll(param1:MovieClip) : void
      {
         var cls2:*;
         var growth_icon:* = undefined;
         var mc:MovieClip = param1;
         StatManager.sendStat2014("5月全新新手任务  ","观看完引导完结动画的",StatManager.USER_CHARACTER);
         cls2 = getDefinitionByName("com.robot.app2.systems.iconLevel.IconController");
         cls2.eachIcon(function(param1:*):void
         {
            if(param1 && param1.url == "RoadToGrowth")
            {
               growth_icon = param1;
               growth_icon.ui.visible = false;
            }
         });
         AnimateManager.playMcAnimate(mc,"growth_road","mc",function():void
         {
            if(growth_icon)
            {
               growth_icon.ui.visible = true;
               growth_icon = null;
            }
            DisplayUtil.removeForParent(mc);
            mc = null;
            TasksManager.setTaskStatus(1995,TasksManager.COMPLETE);
            KTool.showMapAllPlayerAndMonster(true);
            destroy();
            MainManager.actorInfo.mapID = 4;
            MapManager.changeMap(1);
         });
      }
   }
}
