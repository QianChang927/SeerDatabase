package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GameDeepCaveControl
   {
      
      public static var item_num_befor_fight:int;
      
      private static const MAX_STAGE:int = 11;
      
      private static var _petShowMv:MovieClip;
      
      private static var _currentStage:int = -1;
      
      private static var _currentPetId:int = 0;
      
      private static var _currentRegion:int = 0;
      
      private static const PET_IDS:Array = [516,1719,668,280,242,1099,661,918,1328,1189,465,634];
      
      private static const REGIONS:Array = [382,383,384,385,386,387,388,389,390,391,392,393];
       
      
      public function GameDeepCaveControl()
      {
         super();
      }
      
      public static function startGame() : void
      {
         var aruibos:MovieClip = null;
         if(MapManager.currentMap.id == 973)
         {
            aruibos = MapManager.currentMap.controlLevel["aruibosi"];
            LevelManager.closeMouseEvent();
            AnimateManager.playMcAnimate(aruibos,2,"mv",function():void
            {
               TweenLite.to(MainManager.actorModel,1,{
                  "x":888,
                  "y":216,
                  "onComplete":function():void
                  {
                     KTool.changeMapWithCallBack(10425,enterScene);
                  }
               });
            });
         }
         else
         {
            KTool.changeMapWithCallBack(10425,enterScene);
         }
      }
      
      public static function enterScene() : void
      {
         SocketConnection.send(1022,86067570);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         _petShowMv = MapManager.currentMap.controlLevel["petShowMv"];
         _petShowMv.parent.removeChild(_petShowMv);
         _petShowMv.addEventListener(MouseEvent.CLICK,fight);
         _petShowMv.buttonMode = true;
         intoMap(null);
         _currentStage = 0;
         SocketConnection.sendWithCallback(CommandID.GAME_DEEP_CAVE_ENTER_GAME,function(param1:SocketEvent):void
         {
            getPetId(showPet);
         });
      }
      
      private static function intoMap(param1:*) : void
      {
         MainManager.actorModel.skeleton.getBodyMC().play();
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MapManager.currentMap.typeLevel.mouseChildren = MapManager.currentMap.typeLevel.mouseEnabled = false;
         if(MapManager.currentMap.controlLevel["petShowMv"] != _petShowMv)
         {
            DisplayUtil.removeForParent(MapManager.currentMap.controlLevel["petShowMv"]);
         }
         MainManager.actorModel.x = 277;
         MainManager.actorModel.y = 466;
         MapListenerManager.add(MapManager.currentMap.topLevel["leave_btn"],onLeveBtnCLick,"离开");
         MapListenerManager.add(MapManager.currentMap.topLevel["bag"],onPetBagHandler,"背包");
         MapManager.currentMap.controlLevel.addChild(_petShowMv);
      }
      
      private static function fight(param1:* = null) : void
      {
         var e:* = param1;
         ItemManager.upDateCollection(1700428,function():void
         {
            item_num_befor_fight = ItemManager.getNumByID(1700428);
         });
         FightManager.fightNoMapBoss(PetXMLInfo.getName(_currentPetId),_currentRegion);
      }
      
      private static function moveRoad(param1:Function) : void
      {
         var fun:Function = param1;
         CommonUI.setEnabled(MapManager.currentMap.topLevel["leave_btn"],false,false);
         if(_petShowMv.parent)
         {
            _petShowMv.parent.removeChild(_petShowMv);
         }
         MainManager.actorModel.skeleton.play();
         TweenLite.to(road,3.3,{
            "x":-950,
            "y":283.85,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            },
            "onComplete":function():void
            {
               CommonUI.setEnabled(MapManager.currentMap.topLevel["leave_btn"],true);
               MainManager.actorModel.skeleton.stop();
               fun();
            }
         });
      }
      
      private static function getPetId(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.sendWithCallback(CommandID.GAME_GET_PLAYER_INFO,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            _currentRegion = _loc2_.readUnsignedInt();
            _currentPetId = PET_IDS[_currentRegion - 382];
            ToolTipManager.add(_petShowMv,PetXMLInfo.getName(_currentPetId));
            fun();
         },1,102 + _currentStage);
      }
      
      private static function showPet(param1:Function = null) : void
      {
         var fun:Function = param1;
         CommonUI.setEnabled(MapManager.currentMap.topLevel["leave_btn"],false,false);
         tipMv.visible = false;
         MapManager.currentMap.controlLevel.addChild(_petShowMv);
         _petShowMv.x = _petShowMv.y = 0;
         DisplayUtil.removeAllChild(petContainer);
         if(_currentStage < MAX_STAGE - 1)
         {
            AnimateManager.playMcAnimate(_petShowMv,1,"mv",function():void
            {
               var t:int;
               var frame:int = int(KTool.getRandom([1,2,3,4,5])[0]);
               tipMv.gotoAndStop(frame);
               tipMv.visible = true;
               t = int(setTimeout(function():void
               {
                  tipMv.visible = false;
               },1800));
               loadPet();
               CommonUI.setEnabled(MapManager.currentMap.topLevel["leave_btn"],true);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            AnimateManager.playMcAnimate(_petShowMv,2,"mv",function():void
            {
               if(fun != null)
               {
                  fun();
               }
               CommonUI.setEnabled(MapManager.currentMap.topLevel["leave_btn"],true);
            });
         }
      }
      
      private static function loadPet() : void
      {
         var sp:Sprite = null;
         sp = new Sprite();
         petContainer.addChild(sp);
         ResourceManager.getResource(ClientConfig.getPetSwfPath(_currentPetId),function(param1:MovieClip):void
         {
            param1.scaleX = param1.scaleY = 1.8;
            param1.gotoAndStop("left");
            sp.addChild(param1);
         },"pet");
      }
      
      private static function get petContainer() : MovieClip
      {
         return _petShowMv["mv"]["petContainer"];
      }
      
      private static function get tipMv() : MovieClip
      {
         return _petShowMv["mv"]["tip"];
      }
      
      private static function get road() : MovieClip
      {
         return MapManager.currentMap.controlLevel["road"] as MovieClip;
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DeepCaveJisuan"),"正在打开...",function():void
            {
               if(_currentStage == MAX_STAGE - 1)
               {
                  MapManager.currentMap.controlLevel.addChild(_petShowMv);
                  AnimateManager.playMcAnimate(_petShowMv,3,"mv",leave);
               }
               else
               {
                  ++_currentStage;
                  getPetId(function():void
                  {
                     moveRoad(function():void
                     {
                        showPet(null);
                     });
                  });
               }
            });
         }
         else
         {
            MapManager.currentMap.controlLevel.addChild(_petShowMv);
            if(_currentStage == MAX_STAGE - 1)
            {
               leave();
            }
            else
            {
               showLooseTip(leave);
            }
         }
      }
      
      private static function showLooseTip(param1:Function) : void
      {
         var frame:int;
         var t:int;
         var fun:Function = param1;
         tipMv.visible = true;
         frame = int(KTool.getRandom([6,7,8])[0]);
         tipMv.gotoAndStop(frame);
         t = int(setTimeout(function():void
         {
            tipMv.visible = false;
            fun();
         },1800));
      }
      
      private static function leave() : void
      {
         SocketConnection.send(CommandID.GAME_DEEP_CAVE_ENTER_LEAVE);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
         _petShowMv.removeEventListener(MouseEvent.CLICK,fight);
         MapManager.changeMap(973);
      }
      
      private static function onLeveBtnCLick(param1:*) : void
      {
         Alert.show("确定要离开吗？",leave);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86067567);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("suolunsen"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var d4:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.JUSTIN,["我们高兴的太早了，索伦森一定不会就此善罢甘休。"],["是的。"]],[NPC.SAIXIAOXI,["从索伦森出现开始，哈肯撒的复仇，侵占天空之城，法尔肯和诺森德攻击赛尔号，全是这家伙干的！"],["索伦森真是作恶多端啊！"]],[NPC.SHIPER,["我们一定要尽快找到他，彻底制止他的破坏行为！"],["船长，这个任务就交给我们来完成吧！"]],[NPC.WEIBING_1,["报告船长！已经找到索伦森的栖息地了！在泰坦星系的新星球-天魔星上！ "],["太好了！"]],[NPC.WEIBING_1,["根据可靠情报，毁灭之神-迪莫西斯，恐惧之神-阿瑞波斯，风暴之神-阿洛纳斯也同时出现在了天魔星 "],["连神域四天王也到齐了？！"]],[NPC.SAIXIAOXI,["看来天魔星上要有大事发生啊！我们赶快去天魔星看一下吧！"],["嗯，准备出发！"]],[NPC.SHIPER,["你们一定要注意安全，我会将这个情况告诉战神联盟，到时候你们在天蛇星会合！"],["遵命，船长！"]]];
            d2 = [[NPC.ARUIBOSI,["因为索伦森手上拥有泰坦星系最重要的东西，泰坦石！"],["泰坦石？！"]],[NPC.ARUIBOSI,["泰坦星系的能源相当的匮乏，如果没有泰坦石，泰坦星系就将毁灭。"],["你们就甘愿当索伦森的爪牙吗？！"]],[NPC.ARUIBOSI,["为了泰坦星系，我们愿意付出任何代价！所以，你们快离开这里吧。"],["你们那么强大，为什么不从索伦森手上把泰坦石抢回来呢？"]],[NPC.ALUONASI,["回到了泰坦星系后索伦森的实力已经逐渐恢复，我们已经不是他的对手了。"],["可恶的索伦森！！"]]];
            d3 = [[NPC.LEIYI,["这是！神域结界！？为什么神域天王会使用神域结界来帮助索伦森？"],["因为泰坦石。"]],[NPC.SAIXIAOXI,["因为泰坦石是泰坦星系能量的来源，如果没有泰坦石，泰坦星系就将不复存在，而现在，泰坦石在索伦森手上。"],["卑鄙的索伦森"]],[NPC.SAIXIAOXI,["雷伊，我们要怎么样才能阻止索伦森，这个神域结界更本无法进入啊！"],["不要着急。"]],[NPC.GAIYA,["要突破神域结界，一定要对那3个天王进行逐个击破，来削弱结界的能量，硬闯是永远无法击破这个结界的"],["好，明白了"]],[NPC.LEIYI,["现在，我们会在结界上打开一道口子，你要抓紧时间击败那3个天王，这样我们才能闯过神域结界。"],["好，我一定会努力的。"]]];
            d4 = [[NPC.LEIYI,["结界已经出现缺口了，你们一定要抓紧时间击败他们。"]],[NPC.SAIXIAOXI,["放心吧，我们会努力的！"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addChangeMap(4,function():void
            {
               var tid:int = 0;
               MapManager.currentMap.btnLevel.addChild(mapMv);
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               NpcController.hideNpc(1);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addFullMv(ClientConfig.getFullMovie("task_20140110_3"),function():void
            {
               mapMv.parent.removeChild(mapMv);
            });
            taskQuePro.addChangeMap(973,function():void
            {
               var tid:int = 0;
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               hideOrShowNpcs(false);
               MapManager.currentMap.controlLevel.addChild(mapMv);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.addMapMv(mapMv,5,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.addMapMv(mapMv,6,"mv");
            taskQuePro.addDialog(d4);
            taskQuePro.procesEndFun = function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               SocketConnection.send(1022,86067568);
               BufferRecordManager.setMyState(993,true);
               hideOrShowNpcs(true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      private static function get npcs() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(MapManager.currentMap.controlLevel["aruibosi"]);
         _loc1_.push(MapManager.currentMap.controlLevel["aluonasi"]);
         _loc1_.push(MapManager.currentMap.controlLevel["dimoxisi"]);
         _loc1_.push(MapManager.currentMap.controlLevel["suolunsen"]);
         return _loc1_;
      }
      
      private static function get barrier() : MovieClip
      {
         return MapManager.currentMap.controlLevel["barrier"];
      }
      
      private static function hideOrShowNpcs(param1:Boolean) : void
      {
         var _loc3_:DisplayObject = null;
         barrier.visible = param1;
         var _loc2_:int = 0;
         while(_loc2_ < npcs.length)
         {
            _loc3_ = npcs[_loc2_];
            if(_loc3_)
            {
               _loc3_.visible = param1;
            }
            _loc2_++;
         }
      }
      
      public static function hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(993);
      }
   }
}
