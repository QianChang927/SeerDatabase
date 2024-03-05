package com.robot.app2.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.darkPortal.DarkPortalModel;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DarkDoor201403
   {
      
      private static var _doorList:Array = [0,6,12,13,18,19,24,25,26,30,31,32,36,37,38,42,43,44,48,49,50,54,55,56,60,61,62];
      
      private static var _buffList:Array = [[99,30,10,30,10,10],[10,50,50,50,50,10],[99,30,10,30,10,10],[99,30,10,30,10,10],[99,30,10,30,10,10],[99,30,10,30,10,10],[10,50,50,50,50,10],[10,50,50,50,50,10],[10,50,50,50,50,10],[10,99,10,99,10,10],[10,99,10,99,10,10],[10,99,10,99,10,10],[50,50,10,50,10,50],[50,50,10,50,10,50],[50,50,10,50,10,50],[99,20,20,20,20,10],[99,20,20,20,20,10],[99,20,20,20,20,10],[99,20,20,20,20,10],[99,20,20,20,20,10],[99,20,20,20,20,10],[99,30,10,30,10,10],[99,30,10,30,10,10],[99,30,10,30,10,10],[10,50,50,50,50,10],[10,50,50,50,50,10],[10,50,50,50,50,10]];
      
      private static var _titleList:Array = ["HP","攻击","防御","特攻","特防","速度"];
      
      private static var _bossList:Array = ["诺伊尔","伊兰迪","艾辛格","格莱奥"];
      
      private static var _doorIndex:uint;
      
      private static var _buffBits:uint;
      
      private static var _buffMC:MovieClip;
      
      public static var hasBuff:uint;
      
      private static var _map:BaseMapProcess;
       
      
      public function DarkDoor201403()
      {
         super();
      }
      
      public static function setup() : void
      {
         _doorIndex = _doorList.indexOf(DarkPortalModel.curDoor) + 1;
         KTool.getLimitNum(16107,function(param1:uint):void
         {
            var value:uint = param1;
            _buffBits = value;
            ResourceManager.getResource(ClientConfig.getActiveUrl("darkMaze/dark_buff"),function(param1:MovieClip):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               _buffMC = param1;
               _buffMC.getBtn.addEventListener(MouseEvent.CLICK,onClickGetBuff);
               _loc3_ = 0;
               while(_loc3_ < 6)
               {
                  KTool.showScore(_buffMC["value" + _loc3_],_buffList[_doorIndex - 1][_loc3_],0,true);
                  ToolTipManager.add(_buffMC["icon" + _loc3_],_titleList[_loc3_]);
                  _loc3_++;
               }
               LevelManager.topLevel.addChild(_buffMC);
            });
         });
      }
      
      public static function destroyPanel() : void
      {
         var _loc1_:int = 0;
         if(_buffMC)
         {
            _buffMC.getBtn.removeEventListener(MouseEvent.CLICK,onClickGetBuff);
            _loc1_ = 0;
            while(_loc1_ < 6)
            {
               ToolTipManager.remove(_buffMC["icon" + _loc1_]);
               _loc1_++;
            }
            DisplayUtil.removeForParent(_buffMC);
            _buffMC = null;
         }
         if(!MainManager.isFighting)
         {
            clearBuff();
         }
      }
      
      public static function clearBuff() : void
      {
         SocketConnection.send(CommandID.DARK_DOOR_201304,1,_doorIndex);
      }
      
      private static function onClickGetBuff(param1:Event) : void
      {
         var e:Event = param1;
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         MainManager.actorModel.walk.stop();
         if(KTool.getBit(_buffBits,_doorIndex) >= 1)
         {
            SocketConnection.sendWithCallback(CommandID.DARK_DOOR_201304_CHECK,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               var data:ByteArray = e.data as ByteArray;
               var flag:uint = data.readUnsignedInt();
               if(flag == 0)
               {
                  ItemManager.upDateCollection(1700665,function():void
                  {
                     if(ItemManager.getCollectionInfo(1700665) != null)
                     {
                        doExchange2();
                     }
                     else
                     {
                        EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
                        EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
                        ProductAction.buyMoneyProduct(201458);
                     }
                  });
               }
               else
               {
                  LevelManager.root.mouseEnabled = true;
                  LevelManager.root.mouseChildren = true;
                  Alarm.show("您已经拥有了buff，赶快去战斗吧！");
               }
            });
         }
         else
         {
            doExchange(function():void
            {
               KTool.getLimitNum(16107,function(param1:uint):void
               {
                  _buffBits = param1;
                  LevelManager.root.mouseEnabled = true;
                  LevelManager.root.mouseChildren = true;
               });
            });
         }
      }
      
      private static function onBuy(param1:DynamicEvent) : void
      {
         doExchange2();
      }
      
      private static function onCancelBuy(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,onCancelBuy);
         LevelManager.root.mouseEnabled = true;
         LevelManager.root.mouseChildren = true;
      }
      
      private static function doExchange(param1:Function = null) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendByQueue(CommandID.DARK_DOOR_201304,[0,_doorIndex],function(param1:SocketEvent):void
         {
            Alarm.show("恭喜你，领取buff成功！");
            hasBuff = 1;
            if(callBack != null)
            {
               callBack();
            }
            else
            {
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
            }
         },function():void
         {
            LevelManager.root.mouseEnabled = true;
            LevelManager.root.mouseChildren = true;
         });
      }
      
      private static function doExchange2(param1:Function = null) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendByQueue(CommandID.DARK_DOOR_201304,[2,_doorIndex],function(param1:SocketEvent):void
         {
            Alarm.show("恭喜你，购买buff成功！");
            hasBuff = 1;
            if(callBack != null)
            {
               callBack();
            }
            else
            {
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
            }
         },function():void
         {
            LevelManager.root.mouseEnabled = true;
            LevelManager.root.mouseChildren = true;
         });
      }
      
      public static function initFor364(param1:BaseMapProcess) : void
      {
         var i:int = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         i = 0;
         while(i < 4)
         {
            _map.conLevel["boss" + i].visible = false;
            i++;
         }
         KTool.getForeverNum(6037,function(param1:uint):void
         {
            var _loc2_:int = 0;
            _loc2_ = 0;
            while(_loc2_ < 4)
            {
               if(KTool.getBit(param1,_loc2_ + 1))
               {
                  _map.conLevel["boss" + _loc2_].visible = false;
               }
               else
               {
                  _map.conLevel["boss" + _loc2_].visible = true;
               }
               _loc2_++;
            }
         });
         _map.conLevel["boss0"].buttonMode = true;
         ToolTipManager.add(_map.conLevel["boss0"],_bossList[0]);
         _map.conLevel["boss0"].addEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss1"].buttonMode = true;
         ToolTipManager.add(_map.conLevel["boss1"],_bossList[1]);
         _map.conLevel["boss1"].addEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss2"].buttonMode = true;
         ToolTipManager.add(_map.conLevel["boss2"],_bossList[2]);
         _map.conLevel["boss2"].addEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss3"].buttonMode = true;
         ToolTipManager.add(_map.conLevel["boss3"],_bossList[3]);
         _map.conLevel["boss3"].addEventListener(MouseEvent.CLICK,onClickBoss);
      }
      
      public static function onClickBoss(param1:Event) : void
      {
         var _loc2_:uint = uint(param1.currentTarget.name.slice(4));
         FightManager.fightNoMapBoss(_bossList[_loc2_],986 + _loc2_);
      }
      
      public static function destroyFor364(param1:BaseMapProcess) : void
      {
         _map.conLevel["boss0"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss1"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss2"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         _map.conLevel["boss3"].removeEventListener(MouseEvent.CLICK,onClickBoss);
         ToolTipManager.remove(_map.conLevel["boss0"]);
         ToolTipManager.remove(_map.conLevel["boss1"]);
         ToolTipManager.remove(_map.conLevel["boss2"]);
         ToolTipManager.remove(_map.conLevel["boss3"]);
         _map = null;
      }
   }
}
