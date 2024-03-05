package com.robot.app2.control.longKu
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
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
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GameTwilightHallControl
   {
      
      public static const ALL_STAGE:int = 6;
      
      private static var _bossActionMv:MovieClip;
      
      private static var _petContainer:MovieClip;
      
      private static var _fire0:Object;
      
      private static var _fire1:Object;
      
      private static var _stage:int;
      
      private static var _petIds:Array = [1,2,3,2,4,8,7,87,87,78,78,78];
      
      public static var itemNum:int;
      
      private static var _looseTip:MovieClip;
       
      
      public function GameTwilightHallControl()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _stage = 0;
         loadRes(function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
            if(!BufferRecordManager.getMyState(902))
            {
               BufferRecordManager.setMyState(902,true);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("enterLongkuGameMovie"),function():void
               {
                  MapManager.changeLocalMap(10384);
               });
            }
            else
            {
               MapManager.changeLocalMap(10384);
            }
         });
      }
      
      private static function enterScene() : void
      {
         _petContainer.visible = false;
         ++_stage;
         MapManager.currentMap.controlLevel.addChild(_bossActionMv);
         SocketConnection.sendWithCallback(CommandID.GAME_DATING_NEXT_STAGE,function(param1:SocketEvent):void
         {
            var count:int;
            var e:SocketEvent = param1;
            var b:ByteArray = e.data as ByteArray;
            b.position = 0;
            b.readUnsignedInt();
            _petIds = [];
            count = int(b.readUnsignedInt());
            while(b.position < b.length - 1)
            {
               _petIds.push(b.readUnsignedInt());
            }
            if(_stage <= 5)
            {
               playActionMv(showPets);
            }
            else if(_stage == 6)
            {
               playActionMv();
               MapListenerManager.add(_bossActionMv,function(param1:MouseEvent):void
               {
                  fight();
               });
            }
         });
      }
      
      private static function onMapChange(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id == 10384)
         {
            MainManager.actorModel.x = 402;
            MainManager.actorModel.y = 415;
            MainManager.actorModel.direction = Direction.RIGHT;
            MapListenerManager.add(MapManager.currentMap.topLevel["leave_btn"],onLeveBtnCLick,"离开");
            MapListenerManager.add(MapManager.currentMap.topLevel["bag"],onPetBagHandler,"背包");
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel.addChild(_bossActionMv);
            _looseTip.visible = false;
            if(_stage == 0)
            {
               enterScene();
            }
         }
         else
         {
            leave();
         }
      }
      
      private static function fight() : void
      {
         if(AutomaticFightManager.isStart)
         {
            Alarm.show("不能使用自动战斗器！");
            return;
         }
         ItemManager.upDateCollection(1700243,function():void
         {
            itemNum = ItemManager.getNumByID(1700243);
         });
         LevelManager.closeMouseEvent();
         SocketConnection.sendWithCallback(CommandID.GAME_DATING_FIGHT,function(param1:*):void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         });
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MuseJieSuanPanel"),"正在打开...",function():void
            {
               if(_stage == ALL_STAGE)
               {
                  if(!hasPassBefore)
                  {
                     showFirstPassDialog();
                     BufferRecordManager.setMyState(900,true);
                  }
                  else
                  {
                     leave();
                  }
                  return;
               }
               enterScene();
            });
         }
         else
         {
            playFaileDialog();
         }
      }
      
      private static function playFaileDialog() : void
      {
         var t:uint = 0;
         _looseTip.visible = true;
         _looseTip.gotoAndStop(Math.floor(Math.random() * _looseTip.totalFrames));
         t = setTimeout(function():void
         {
            clearTimeout(t);
            leave();
         },3000);
      }
      
      private static function showPets() : void
      {
         var j:int;
         var i:int = 0;
         var petView:Sprite = null;
         var continaer:MovieClip = null;
         var frame:int = int(KTool.getRandom([1,2,3,4,5,6,7,8],1)[0]);
         _looseTip.gotoAndStop(frame);
         _looseTip.visible = true;
         setTimeout(function():void
         {
            _looseTip.visible = false;
         },3000);
         _petContainer.gotoAndStop(_stage);
         j = 0;
         while(j < _petContainer.numChildren)
         {
            continaer = _petContainer.getChildAt(j) as MovieClip;
            DisplayUtil.removeAllChild(continaer);
            _petContainer.visible = true;
            j++;
         }
         DepthManager.swapDepthAll(_petContainer as DisplayObjectContainer);
         switch(_stage)
         {
            case 1:
               i = 0;
               while(i < 2)
               {
                  petView = getPetView(_fire0,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
               break;
            case 2:
               i = 0;
               while(i < 3)
               {
                  petView = getPetView(_fire1,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
               break;
            case 3:
               i = 0;
               while(i < 4)
               {
                  petView = getPetView(_fire0,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
               break;
            case 4:
               i = 0;
               while(i < 5)
               {
                  petView = getPetView(_fire1,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
               break;
            case 5:
               i = 0;
               while(i < 3)
               {
                  petView = getPetView(_fire0,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
               i = 3;
               while(i < 6)
               {
                  petView = getPetView(_fire1,_petIds[i]);
                  addPetToContainer(petView,i);
                  i++;
               }
         }
      }
      
      private static function addPetToContainer(param1:Sprite, param2:int) : void
      {
         var _loc3_:MovieClip = _petContainer["p_" + param2];
         _loc3_.addChild(param1);
      }
      
      private static function getPetView(param1:Object, param2:int) : Sprite
      {
         var view:Sprite = null;
         var fire:MovieClip = null;
         var fireClass:Object = param1;
         var petId:int = param2;
         view = new Sprite();
         fire = new fireClass() as MovieClip;
         view.addChild(fire);
         fire.addFrameScript(fire.totalFrames - 1,function():void
         {
            fire.addFrameScript(fire.totalFrames - 1,null);
            DisplayUtil.removeForParent(fire);
            ResourceManager.getResource(ClientConfig.getPetSwfPath(petId),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.gotoAndStop("left");
               view.addChild(mc);
               mc.scaleX = mc.scaleY = 0;
               TweenLite.to(mc,0.5,{
                  "scaleX":1,
                  "scaleY":1
               });
               MapListenerManager.add(mc,function(param1:MouseEvent):void
               {
                  fight();
               });
            },"pet");
         });
         return view;
      }
      
      private static function playActionMv(param1:Function = null) : void
      {
         _bossActionMv.gotoAndStop(1);
         switch(_stage)
         {
            case 1:
               AnimateManager.playMcAnimate(_bossActionMv["boss0"],0,"",param1);
               break;
            case 2:
               AnimateManager.playMcAnimate(_bossActionMv["boss1"],0,"",param1);
               break;
            case 3:
               AnimateManager.playMcAnimate(_bossActionMv["boss0"],0,"",param1);
               break;
            case 4:
               AnimateManager.playMcAnimate(_bossActionMv["boss1"],0,"",param1);
               break;
            case 5:
               AnimateManager.playMcAnimate(_bossActionMv["boss1"],0,"",param1);
               AnimateManager.playMcAnimate(_bossActionMv["boss0"]);
               break;
            case 6:
               _looseTip.visible = false;
               _bossActionMv.gotoAndStop(2);
               AnimateManager.playMcAnimate(_bossActionMv,2,"mv",param1);
         }
      }
      
      private static function leave() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         SocketConnection.send(CommandID.GAME_DATING_LEAVE);
         MapManager.changeMap(955);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         DisplayUtil.removeForParent(_bossActionMv);
         DisplayUtil.removeForParent(_petContainer);
         DisplayUtil.removeForParent(_looseTip);
         _bossActionMv = _petContainer = _looseTip = null;
      }
      
      private static function onLeveBtnCLick(param1:*) : void
      {
         Alert.show("确定要离开吗？",leave);
      }
      
      private static function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private static function loadRes(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("musedating"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            _bossActionMv = mcloader.loader.content["actionMv"];
            _petContainer = _bossActionMv["position"];
            _looseTip = _bossActionMv["tip"];
            _looseTip.visible = _petContainer.visible = false;
            _fire0 = mcloader.loader.contentLoaderInfo.applicationDomain.getDefinition("fire0");
            _fire1 = mcloader.loader.contentLoaderInfo.applicationDomain.getDefinition("fire1");
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            if(fun != null)
            {
               fun();
            }
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      private static function showFirstPassDialog() : void
      {
         var mapMv:MovieClip = null;
         var taskQuePro:TaskQuneProcessor = null;
         var mcloader:MCLoader = null;
         var d1:Array = null;
         var d2:Array = null;
         var d3:Array = null;
         taskQuePro = new TaskQuneProcessor();
         mcloader = new MCLoader(ClientConfig.getMapAnimate("musedating_mv"),null,Loading.TITLE_AND_PERCENT,"加载..");
         d1 = [[NPC.HUOYITE,["成功了，这样他们就无法进入黑龙殿了。"],["嗯，希望老大不要怪我们把桥给拆了。。。"]]];
         d2 = [[NPC.HAKESASI,["可恶！哈肯撒是不是就在黑龙殿里？"],["哈哈哈，是啊。"]],[NPC.SHADUOKE,["这座石桥是通往黑龙殿的唯一入口，不过现在已经没有了！"],["我一定要想办法进入黑龙殿！"]]];
         d3 = [[NPC.SHADUOKE,["通往黑龙殿的道路四周都是悬崖，有着非常强的气流，想飞进去是完全不可能的！"],["可恶，难道就没有办法了吗！"]],[NPC.SHADUOKE,["霍伊特我们走"],["恩！"]]];
         taskQuePro.procesEndFun = function():void
         {
            leave();
         };
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var e:* = param1;
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            mapMv = mcloader.loader.content["mv"];
            taskQuePro.addFullMv(ClientConfig.getFullMovie("dating_over_dialog"));
            taskQuePro.addFullMv(ClientConfig.getFullMovie("dating_mv2"),function():void
            {
               if(MapManager.currentMap.controlLevel["bridge"])
               {
                  MapManager.currentMap.controlLevel["bridge"].visible = false;
               }
               MapManager.currentMap.controlLevel.addChild(mapMv);
               DisplayUtil.removeForParent(_bossActionMv);
            });
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.start();
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      public static function get hasPassBefore() : Boolean
      {
         return BufferRecordManager.getMyState(900);
      }
      
      public static function get stage() : int
      {
         return _stage;
      }
   }
}
