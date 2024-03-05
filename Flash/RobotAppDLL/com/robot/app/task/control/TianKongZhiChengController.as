package com.robot.app.task.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TianKongZhiChengController
   {
      
      protected static var _instance:com.robot.app.task.control.TianKongZhiChengController;
       
      
      protected var BUFFER:uint = 942;
      
      private var _taskMC:MovieClip;
      
      public function TianKongZhiChengController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.task.control.TianKongZhiChengController
      {
         return _instance = _instance || new com.robot.app.task.control.TianKongZhiChengController();
      }
      
      public function start() : void
      {
         (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).gotoAndStop(2);
         (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(2);
         StoryLoaderManager.insatnce.swfName = "map_965_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      public function guyHelpFight() : void
      {
         var md20:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,7,"mc7"]);
         this._taskMC.visible = true;
         this.hideAllBtns();
         MapManager.currentMap.controlLevel["baoshiMc"].visible = false;
         TaskDiaLogManager.single.playStory([md20],function():void
         {
            BonusController.addIgnore(166);
            FightManager.fightNoMapBoss("天云兽",213);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         });
      }
      
      public function fightBoos() : void
      {
         BonusController.addIgnore(166);
         FightManager.fightNoMapBoss("天云兽",214);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      protected function onFightOverHandler(param1:PetFightEvent) : void
      {
         if(MapManager.currentMap.id != 965)
         {
            return;
         }
         if(FightManager.currentBossRegion == 166 || FightManager.currentBossRegion == 214)
         {
            if((param1.dataObj as FightOverInfo).reason == 5)
            {
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("TianKongAlertPanel"));
         }
         if(FightManager.currentBossRegion == 240 || FightManager.currentBossRegion == 241)
         {
            if((param1.dataObj as FightOverInfo).reason == 5)
            {
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("SkyCityKongzhiyingFightFinishPanel"));
         }
         if(FightManager.currentBossRegion == 249 || FightManager.currentBossRegion == 250)
         {
            if((param1.dataObj as FightOverInfo).reason == 5)
            {
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("SkyCityTianzhiyinFinishPanel"));
         }
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         this._taskMC.x = 50;
         this._taskMC.y = 20;
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            this.hideAllBtns();
            this.startPreStroy();
         }
         else
         {
            this.showAllBtns();
            this._taskMC.visible = false;
            this.addEvents();
         }
      }
      
      private function hideAllBtns() : void
      {
         (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = false;
         MapManager.currentMap.controlLevel["boosBtn"].visible = false;
         MapManager.currentMap.controlLevel["descBtn"].visible = false;
         MapManager.currentMap.controlLevel["baoshiMc"].visible = true;
      }
      
      private function showAllBtns() : void
      {
         (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = true;
         MapManager.currentMap.controlLevel["boosBtn"].visible = true;
         MapManager.currentMap.controlLevel["descBtn"].visible = true;
         MapManager.currentMap.controlLevel["baoshiMc"].visible = false;
      }
      
      public function removeEvents() : void
      {
         (MapManager.currentMap.controlLevel["boosBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onFightBoosHandler);
         (MapManager.currentMap.controlLevel["descBtn"] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onDescHandler);
         (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onBoos1Btn);
         (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onBlackTuolukeClick);
         ToolTipManager.remove(MapManager.currentMap.controlLevel["boos1Btn"]);
         ToolTipManager.remove(MapManager.currentMap.controlLevel["baoshiMc"]);
         this._taskMC = null;
      }
      
      private function addEvents() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         (MapManager.currentMap.controlLevel["boosBtn"] as MovieClip).buttonMode = true;
         (MapManager.currentMap.controlLevel["boosBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onFightBoosHandler);
         (MapManager.currentMap.controlLevel["descBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onDescHandler);
         (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onBlackTuolukeClick);
         (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).buttonMode = true;
         MapListenerManager.add(MapManager.currentMap.controlLevel["boos1Btn"],this.onBoos1Btn,"空之印守护兽-玄火兽");
         MapListenerManager.add(MapManager.currentMap.controlLevel["boos2Btn"],this.onBoos2Btn,"天之印守护者-翔鹰兽");
         ToolTipManager.add(MapManager.currentMap.controlLevel["baoshiMc"],"云之印守护者-天云兽");
      }
      
      public function onBoos1Btn(param1:MouseEvent) : void
      {
         var mcloader:MCLoader = null;
         var e:MouseEvent = param1;
         if(BufferRecordManager.getMyState(960) == false)
         {
            mcloader = new MCLoader(ClientConfig.getMapAnimate("kongzhiying"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               var mapMv:MovieClip = null;
               var e:* = param1;
               (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(1);
               mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               mapMv = mcloader.loader.content["mv"];
               mcloader.clear();
               MapManager.currentMap.controlLevel.addChild(mapMv);
               (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).visible = false;
               MapManager.currentMap.controlLevel["boosBtn"].visible = false;
               MapManager.currentMap.controlLevel["descBtn"].visible = false;
               (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = false;
               BufferRecordManager.setMyState(960,true);
               AnimateManager.playMcAnimate(mapMv,0,"",function():void
               {
                  (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = true;
                  MapManager.currentMap.controlLevel["boosBtn"].visible = true;
                  MapManager.currentMap.controlLevel["descBtn"].visible = true;
                  (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).visible = true;
                  (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(2);
                  ModuleManager.showModule(ClientConfig.getAppModule("SkyCityKongzhiyingMainPanel"));
                  DisplayUtil.removeForParent(mapMv);
               });
            });
            mcloader.doLoad();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SkyCityKongzhiyingMainPanel"));
         }
      }
      
      public function onBoos2Btn(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(BufferRecordManager.getMyState(970) == false)
         {
            this.playBlackTuolukeTask(function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SkyCityTianzhiyinMianPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SkyCityTianzhiyinMianPanel"));
         }
      }
      
      private function onBlackTuolukeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(BufferRecordManager.getMyState(970) == false)
         {
            this.playBlackTuolukeTask(function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BlackBulukeMainPanel"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BlackBulukeMainPanel"));
         }
      }
      
      private function playBlackTuolukeTask(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("tianzhiyin"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mapMv:MovieClip = null;
            var e:* = param1;
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            mapMv = mcloader.loader.content["mv"];
            mcloader.clear();
            MapManager.currentMap.controlLevel.addChild(mapMv);
            (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).visible = false;
            (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).visible = false;
            MapManager.currentMap.controlLevel["boosBtn"].visible = false;
            MapManager.currentMap.controlLevel["descBtn"].visible = false;
            (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = false;
            BufferRecordManager.setMyState(970,true);
            AnimateManager.playMcAnimate(mapMv,0,"",function():void
            {
               (MapManager.currentMap.controlLevel["blackTuoluke"] as MovieClip).visible = true;
               MapManager.currentMap.controlLevel["boosBtn"].visible = true;
               MapManager.currentMap.controlLevel["descBtn"].visible = true;
               (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).visible = true;
               (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).visible = true;
               (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(2);
               DisplayUtil.removeForParent(mapMv);
               fun();
            });
         });
         mcloader.doLoad();
      }
      
      protected function onDescHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TianKongDescPanel"));
      }
      
      private function onFightBoosHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TianKongMainPanel"));
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapManager.currentMap.controlLevel["baoshiMc"].visible = false;
         (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).gotoAndStop(1);
         (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(1);
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            BufferRecordManager.setMyState(BUFFER,true);
            KTool.showMapAllPlayerAndMonster();
            MapManager.currentMap.controlLevel["baoshiMc"].visible = true;
            showAllBtns();
            addEvents();
            _taskMC.visible = false;
            ModuleManager.showModule(ClientConfig.getAppModule("TianKongMainPanel"));
            (MapManager.currentMap.controlLevel["boos1Btn"] as MovieClip).gotoAndStop(2);
            (MapManager.currentMap.controlLevel["boos2Btn"] as MovieClip).gotoAndStop(2);
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131213_2",true]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JINCHI_TUOLUKE,["这里到处都散发着阴森和邪恶的气息，天空之城到底发生了什么。"],["我们一定要格外小心。"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JINCHI_TUOLUKE,["这里是我们托鲁克一族的禁地，什么时候变成你们的领地了，可恶！"],["一定是索伦森干的！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TUOLUSI,["父亲，为什么他长得跟托鲁克一族一模一样？"],["难道。。。"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131213_3",true]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["暗黑魔君索伦森已经将这只托鲁克魔化了，现在天空之城和这只暗黑托鲁克已经为索伦森所用了，哈哈哈哈！"],["可恶！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["暗黑托鲁克，这里就交给你了，将这些外来者赶出去！"],["遵命！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JINCHI_TUOLUKE,["不好，连三大试炼之印的守护者也被下了毒手！"],["可恶的索伦森，我们一定要把天空之城夺回来！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["金翅托鲁克，托鲁斯，你们怎么也在这里？"],["赛小息，你们怎么也来了？"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我们在追踪暗黑魔君索伦森，一直追到这里。"],["原来如此。"]);
         var _loc17_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JINCHI_TUOLUKE,["这里是我们托鲁克一族的禁地，索伦森来到这里，魔化了我们的同胞，还将这里搞的乌烟瘴气。"],["太可恨了！"]);
         var _loc18_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["托鲁克，托鲁斯，那就让我们同心协力，将索伦森赶出天空之城，将天空之城回归原样吧！"],["好！"]);
         var _loc19_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20131213_2word",true]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
      
      public function destory() : void
      {
         this.removeEvents();
      }
   }
}
