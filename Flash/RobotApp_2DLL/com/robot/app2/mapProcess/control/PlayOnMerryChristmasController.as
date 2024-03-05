package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PlayOnMerryChristmasController
   {
      
      private static var _mapObj:MovieClip;
      
      private static var _index:int;
      
      private static var _mapObjArr:Array;
      
      private static var _mapConfig:Array = [[{
         "type":16,
         "x":500,
         "y":360
      },{
         "type":10,
         "x":108,
         "y":257
      }],[{
         "type":17,
         "x":434,
         "y":294
      },{
         "type":2,
         "x":596,
         "y":453
      }],[{
         "type":19,
         "x":378,
         "y":355
      },{
         "type":3,
         "x":332,
         "y":416
      }],[{
         "type":21,
         "x":355,
         "y":501
      },{
         "type":11,
         "x":240,
         "y":510
      }],[{
         "type":22,
         "x":701,
         "y":255
      },{
         "type":4,
         "x":344,
         "y":296
      }],[{
         "type":23,
         "x":316,
         "y":310
      },{
         "type":24,
         "x":697,
         "y":298
      },{
         "type":5,
         "x":879,
         "y":346
      },{
         "type":12,
         "x":95,
         "y":270
      }],[{
         "type":25,
         "x":372,
         "y":373
      },{
         "type":26,
         "x":651,
         "y":369
      },{
         "type":6,
         "x":230,
         "y":489
      },{
         "type":7,
         "x":665,
         "y":501
      }],[{
         "type":27,
         "x":730,
         "y":289
      },{
         "type":28,
         "x":233,
         "y":276
      },{
         "type":8,
         "x":310,
         "y":452
      },{
         "type":9,
         "x":700,
         "y":443
      }]];
       
      
      public function PlayOnMerryChristmasController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      private static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < _mapObjArr.length)
         {
            _mapObjArr[_loc1_].stop();
            _mapObjArr[_loc1_].removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_mapObjArr[_loc1_]);
            _mapObjArr[_loc1_] = null;
            _loc1_++;
         }
         _mapObjArr.splice(0,_mapObjArr.length);
         _mapObjArr = null;
         if(_mapObj)
         {
            if(_mapObj.parent)
            {
               DisplayUtil.removeForParent(_mapObj);
            }
            _mapObj.stop();
            _mapObj = null;
         }
      }
      
      private static function loadMc(param1:String, param2:Function, param3:int = -1) : void
      {
         var url:String = param1;
         var func:Function = param2;
         var index:int = param3;
         ResourceManager.getResource(url,function(param1:MovieClip):void
         {
            if(index != -1)
            {
               func(param1,index);
            }
            else
            {
               func(param1);
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _mapObj = e.target as MovieClip;
         _index = int(_mapObj.name);
         if(_mapObj.currentFrame == 2)
         {
            return;
         }
         if(_mapObj.currentFrame == 1)
         {
            StatManager.sendStat2014("1218欢乐圣诞节场景小交互","点击没有装饰的圣诞树",StatManager.RUN_ACT_2015);
            ItemManager.updateAndGetItemsNum([1707617],function(param1:Array):void
            {
               var a:Array = param1;
               if(a[0] > 0)
               {
                  BonusController.addDelay(1661);
                  send(_index);
               }
               else
               {
                  NpcDialogNew_1._HasDanmu = false;
                  NpcDialogNew_1.show(NPC.XIAOXUE,["圣诞节即将来临，在赛尔号船舱内寻找装饰品装点圣诞树吧，会有丰厚奖励哦！"],null,null,false,function():void
                  {
                     NpcDialogNew_1._HasDanmu = true;
                  });
               }
            });
         }
         else if(_mapObj.currentFrame == 3)
         {
            StatManager.sendStat2014("1218欢乐圣诞节场景小交互","点击装饰品",StatManager.RUN_ACT_2015);
            _mapObj.mouseEnabled = false;
            NpcDialogNew_1._HasDanmu = false;
            NpcDialogNew_1.show(NPC.XIAOXUE,["快使用装饰品装扮赛尔号船舱内的圣诞树吧，会有丰厚奖励哦！"],null,null,false,function():void
            {
               NpcDialogNew_1._HasDanmu = true;
               send(_index);
            });
         }
      }
      
      private static function onComp(param1:MapEvent) : void
      {
         if(_mapObjArr != null)
         {
            destroy();
         }
         _mapObjArr = new Array();
         switch(MapManager.currentMap.id)
         {
            case 4:
               getState(1);
               break;
            case 5:
               getState(2);
               break;
            case 7:
               getState(3);
               break;
            case 103:
               getState(4);
               break;
            case 107:
               getState(5);
               break;
            case 332:
               getState(6);
               break;
            case 1129:
               getState(7);
         }
      }
      
      private static function getState(param1:int) : void
      {
         var i:int = param1;
         KTool.getMultiValue([15845],function(param1:Array):void
         {
            var a:Array = param1;
            var j:int = 0;
            while(j < _mapConfig[i].length)
            {
               loadMc(ClientConfig.getAppRes("mapobj/PlayOnMerryChristmas"),function(param1:MovieClip, param2:int):void
               {
                  _mapObj = param1;
                  _mapObj.mouseChildren = false;
                  _mapObj.addEventListener(MouseEvent.CLICK,onClick);
                  if(_mapConfig[i][param2].type <= 14)
                  {
                     showGift(KTool.getBit(a[0],_mapConfig[i][param2].type));
                  }
                  else
                  {
                     showChristmasTree(KTool.getBit(a[0],_mapConfig[i][param2].type) + 1);
                  }
                  _mapObj.name = _mapConfig[i][param2].type + "";
                  _mapObj.x = _mapConfig[i][param2].x;
                  _mapObj.y = _mapConfig[i][param2].y;
                  _mapObjArr.push(_mapObj);
                  MapManager.currentMap.depthLevel.addChild(param1);
                  if(param2 == _mapConfig[i].length - 1)
                  {
                     DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
                  }
               },j);
               j++;
            }
         });
      }
      
      private static function showChristmasTree(param1:int) : void
      {
         _mapObj.buttonMode = param1 == 1;
         _mapObj.gotoAndStop(param1);
      }
      
      private static function showAnimate() : void
      {
         loadMc(ClientConfig.getMapAnimate("PlayOnMerryChristmas"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _mapObj.visible = false;
            mc.x = _mapObj.x;
            mc.y = _mapObj.y;
            MapManager.currentMap.depthLevel.addChild(mc);
            LevelManager.mapLevel.mouseChildren = false;
            AnimateManager.playMcEndHandler(mc,function():void
            {
               NpcDialogNew_1._HasDanmu = false;
               NpcDialogNew_1.show(NPC.XIAOXUE,["呀！偷吃糖果被发现了！"],["......"],[function():void
               {
                  NpcDialogNew_1.show(NPC.XIAOXUE,["预祝你圣诞节快乐！我要跑路了！拜拜！"],["呃~~"],[function():void
                  {
                     NpcDialogNew_1._HasDanmu = true;
                     BonusController.showDelayBonus(1661);
                     BonusController.removeDelay(1661);
                     MapManager.currentMap.depthLevel.removeChild(mc);
                     _mapObj.buttonMode = false;
                     _mapObj.visible = true;
                     _mapObj.gotoAndStop(2);
                     LevelManager.mapLevel.mouseChildren = true;
                  }]);
               }]);
            });
         });
      }
      
      private static function showGift(param1:int) : void
      {
         _mapObj.buttonMode = _mapObj.visible = param1 == 0;
         _mapObj.gotoAndStop(3);
      }
      
      private static function send(param1:int) : void
      {
         var i:int = param1;
         SocketConnection.sendByQueue(43679,[i],function(param1:SocketEvent):void
         {
            if(_index <= 14)
            {
               _mapObj.visible = false;
            }
            else
            {
               showAnimate();
            }
         });
      }
   }
}
