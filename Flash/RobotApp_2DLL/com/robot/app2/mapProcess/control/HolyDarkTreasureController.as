package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HolyDarkTreasureController
   {
      
      private static var bossMc:MovieClip;
      
      private static var _index:int;
      
      private static var treasureArr:Array;
      
      private static var treasureLen:uint;
      
      public static var curMapIndex:int;
      
      public static var curHighMapIndex:int;
      
      private static var isAddListen:Boolean;
      
      private static var isFightOver:Boolean;
      
      private static const pos:Array = [{
         "x":276.05,
         "y":248.35
      },{
         "x":300,
         "y":300
      },{
         "x":60,
         "y":172
      },{
         "x":607.05,
         "y":309
      },{
         "x":560.05,
         "y":166.35
      },{
         "x":728.05,
         "y":281
      }];
      
      private static const treasurePos:Array = [[{
         "x":376.05,
         "y":322.35
      },{
         "x":732,
         "y":374
      }],[{
         "x":255.05,
         "y":252.35
      },{
         "x":669,
         "y":369
      }],[{
         "x":265.05,
         "y":334.35
      },{
         "x":598,
         "y":400
      }],[{
         "x":368.05,
         "y":228.35
      },{
         "x":688,
         "y":355
      }],[{
         "x":202.05,
         "y":250.35
      },{
         "x":361,
         "y":336
      }],[{
         "x":468.05,
         "y":191.35
      },{
         "x":835,
         "y":291
      }],[{
         "x":352,
         "y":311
      },{
         "x":539.05,
         "y":261.35
      }],[{
         "x":261.05,
         "y":262.35
      },{
         "x":521,
         "y":347
      }],[{
         "x":314,
         "y":321
      },{
         "x":581.05,
         "y":388.35
      }],[{
         "x":607.05,
         "y":230.35
      }],[{
         "x":370.05,
         "y":273.35
      }]];
      
      private static const NPCs:Array = [NPC.HACO,NPC.KACHIDARI,NPC.BO_QIE_ER,NPC.HUAJUANJUAN,NPC.GOODNAITE];
      
      public static const reallyMapIDs:Array = [20,463,57,330,83,60,404,481,494,668,350];
      
      public static const changeMapIDs:Array = [21,463,57,331,85,60,404,481,494,669,350];
       
      
      public function HolyDarkTreasureController()
      {
         super();
      }
      
      public static function initData() : void
      {
         if(!isAddListen)
         {
            isAddListen = true;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,changeTargetMap);
            KTool.getMultiValue([4503,4504]).then(function(param1:Array):void
            {
               curMapIndex = param1[0];
               curHighMapIndex = param1[1];
            });
         }
      }
      
      private static function changeTargetMap(param1:MapEvent) : void
      {
         var _loc2_:int = reallyMapIDs.indexOf(MapManager.currentMap.id);
         var _loc3_:int = changeMapIDs.indexOf(MapManager.currentMap.id);
         if(_loc2_ >= 0 && (curMapIndex - 1 == _loc2_ || curHighMapIndex - 1 + 9 == _loc2_))
         {
            entreTreasueMap(_loc2_);
            if(!isFightOver)
            {
               showTipsPanel(2);
            }
            else
            {
               isFightOver = !isFightOver;
            }
         }
         else if(_loc3_ >= 0 && (curMapIndex - 1 == _loc3_ || curHighMapIndex - 1 + 9 == _loc3_))
         {
            showTipsPanel(3);
         }
      }
      
      public static function enterFightMap(param1:int) : void
      {
         var index:int = param1;
         _index = index;
         ResourceManager.getResource(ClientConfig.getAppResource("2016/1111/petMc"),function(param1:MovieClip):void
         {
            bossMc = param1;
            bossMc.gotoAndStop(_index + 1);
            bossMc.x = pos[_index].x;
            bossMc.y = pos[_index].y;
            bossMc.buttonMode = true;
            param1.addEventListener(MouseEvent.CLICK,clickHandle);
            MapManager.currentMap.controlLevel.addChild(param1);
            showTipsPanel(1);
         });
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPCs[_index],["你也是来抢藏宝图的吗？你怕我揍你吗？"],["你看我们不打行不行！","我才不怕你"],[function():void
         {
            KTool.buyProductWithPromise(249089).then(function():Promise
            {
               return SocketConnection.sendWithPromise(46275,[7,0]);
            }).then(complete);
         },function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOver);
            FightManager.fightNoMapBoss("",8273 + _index);
         }]);
      }
      
      private static function complete() : void
      {
         Alarm2.show("恭喜你获得藏宝图！",function():void
         {
            destroy();
            MapManager.changeMapWithCallback(1,function():void
            {
               KTool.getMultiValue([4503]).then(function(param1:Array):void
               {
                  HolyDarkTreasureController.curMapIndex = param1[0];
                  ModuleManager.showAppModule("HolyDarkTreasureMapsPanel",HolyDarkTreasureController.curMapIndex);
               });
            });
         });
      }
      
      private static function fightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            complete();
         }
         else
         {
            enterFightMap(_index);
         }
      }
      
      public static function entreTreasueMap(param1:int) : void
      {
         var index:int = param1;
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onDestroy);
         _index = index;
         if(_index >= 9)
         {
            addMcToMap(1,0);
         }
         else
         {
            KTool.getMultiValue([4502]).then(function(param1:Array):void
            {
               addMcToMap(2,param1[0]);
            });
         }
      }
      
      private static function addMcToMap(param1:int, param2:int) : void
      {
         var _loc4_:Sprite = null;
         treasureArr = [];
         var _loc3_:int = 0;
         while(_loc3_ < param1)
         {
            if(BitUtils.getBit(param2,_loc3_) <= 0)
            {
               (_loc4_ = treasureMc).name = "treasure_" + _loc3_;
               _loc4_.x = treasurePos[_index][_loc3_].x;
               _loc4_.y = treasurePos[_index][_loc3_].y;
               _loc4_.buttonMode = true;
               treasureArr.push(_loc4_);
               _loc4_.addEventListener(MouseEvent.CLICK,onTreasure);
               MapManager.currentMap.topLevel.addChild(_loc4_);
               MapManager.currentMap.topLevel.mouseChildren = MapManager.currentMap.topLevel.mouseEnabled = true;
            }
            _loc3_++;
         }
      }
      
      private static function onMouseDown(param1:MouseEvent) : void
      {
         (param1.currentTarget as Sprite).startDrag();
      }
      
      private static function onMouseUp(param1:MouseEvent) : void
      {
         (param1.currentTarget as Sprite).stopDrag();
      }
      
      private static function showTipsPanel(param1:int, param2:Boolean = false) : void
      {
         ModuleManager.showAppModule("HolyDarkTreasureTipsPanel",{
            "frame":param1,
            "isOpen":param2
         });
      }
      
      private static function onTreasure(param1:MouseEvent) : void
      {
         var _sp:Sprite = null;
         var para:int = 0;
         var onFightOver2:Function = null;
         var getTreasure:Function = null;
         var e:MouseEvent = param1;
         onFightOver2 = function(param1:PetFightEvent):void
         {
            isFightOver = false;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver2);
            var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
            if(_loc2_.winnerID == MainManager.actorID)
            {
               getTreasure();
            }
         };
         getTreasure = function():void
         {
            if(reallyMapIDs.indexOf(MapManager.currentMap.id) >= 9)
            {
               DisplayUtil.removeForParent(_sp);
               showTipsPanel(4,true);
               curHighMapIndex = -1;
            }
            else
            {
               DisplayUtil.removeForParent(_sp);
               KTool.getMultiValue([4503]).then(function(param1:Array):void
               {
                  if(param1[0] == 0)
                  {
                     curMapIndex = -1;
                  }
                  showTipsPanel(4,param1[0] == 0);
               });
            }
         };
         _sp = e.currentTarget as Sprite;
         var index:int = int(KTool.getIndex(_sp));
         para = reallyMapIDs.indexOf(MapManager.currentMap.id) >= 9 ? 2 : index;
         NpcDialog.show(NPC.SHILAIMU,["这是我的宝藏，你不可以动！"],["对不起现在是我的了！"," 你看这些行不行？"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver2);
            FightManager.fightNoMapBoss("",8278 + para);
            isFightOver = true;
         },function():void
         {
            KTool.buyProductWithPromise(249110).then(function():Promise
            {
               return SocketConnection.sendWithPromise(46275,[3,para + 1]);
            }).then(getTreasure);
         }]);
      }
      
      private static function get treasureMc() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(13382502);
         _loc1_.graphics.drawRect(0,0,70,70);
         _loc1_.graphics.endFill();
         _loc1_.alpha = 0;
         return _loc1_;
      }
      
      private static function onDestroy(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onDestroy);
         var _loc2_:int = 0;
         while(_loc2_ < treasureArr.length)
         {
            (treasureArr[_loc2_] as Sprite).removeEventListener(MouseEvent.CLICK,onTreasure);
            DisplayUtil.removeForParent(treasureArr[_loc2_] as Sprite);
            treasureArr[_loc2_] = null;
            _loc2_++;
         }
         treasureArr = null;
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOver);
         bossMc.removeEventListener(MouseEvent.CLICK,clickHandle);
         bossMc = null;
      }
   }
}
