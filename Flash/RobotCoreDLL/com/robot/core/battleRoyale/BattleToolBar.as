package com.robot.core.battleRoyale
{
   import com.robot.core.CommandID;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class BattleToolBar
   {
      
      public static const START_INDEX:uint = 400753;
      
      public static const MAX_NUM:uint = 7;
      
      public static const END_ANGLE:uint = 176;
      
      public static const btArr:Array = [[400761],[400762],[400753],[400766],[400767],[400768],[400769]];
       
      
      private var _mainMC:MovieClip;
      
      private var _headMC:MovieClip;
      
      private var _bloodMC:MovieClip;
      
      private var _bloodMaskMC:MovieClip;
      
      private var _exitBtn:SimpleButton;
      
      private var _itemArr:Array;
      
      private var _face:com.robot.core.battleRoyale.Face;
      
      public function BattleToolBar(param1:MovieClip)
      {
         var _loc2_:BattleItem = null;
         super();
         this._mainMC = param1;
         this._headMC = this._mainMC["head"];
         this._bloodMC = this._mainMC["blood"];
         this._exitBtn = this._mainMC["exitBtn"];
         ToolTipManager.add(this._exitBtn,"离开战场");
         this._itemArr = new Array();
         this._face = new com.robot.core.battleRoyale.Face(this._headMC,MainManager.actorInfo,75);
         var _loc3_:int = 1;
         while(_loc3_ <= MAX_NUM)
         {
            _loc2_ = new BattleItem(MapManager.currentMap.controlLevel["item_" + _loc3_],_loc3_ - 1);
            this._itemArr.push(_loc2_);
            _loc3_++;
         }
         this._exitBtn.addEventListener(MouseEvent.CLICK,this.onExitBtn);
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,this.onItemList);
         SocketConnection.send(CommandID.ITEM_LIST,START_INDEX,START_INDEX + 16,2);
      }
      
      public function get mc() : MovieClip
      {
         return this._mainMC;
      }
      
      public function useItem(param1:uint, param2:uint) : void
      {
         var _loc3_:BattleItem = null;
         for each(_loc3_ in this._itemArr)
         {
            if(_loc3_.info && _loc3_.info.itemID == param1 && param2 == MainManager.actorID)
            {
               _loc3_.afterUse();
            }
         }
      }
      
      private function onItemList(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var len:uint;
         var arr:Array;
         var info:SingleItemInfo = null;
         var index:int = 0;
         var i:int = 0;
         var tmpArr:Array = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,this.onItemList);
         data = e.data as ByteArray;
         len = data.readUnsignedInt();
         arr = new Array();
         i = 0;
         while(i < len)
         {
            info = new SingleItemInfo(data);
            arr.push(info);
            i++;
         }
         i = 0;
         while(i < btArr.length)
         {
            tmpArr = null;
            tmpArr = arr.filter(function(param1:*, param2:int, param3:Array):Boolean
            {
               if(btArr[i].indexOf(param1.itemID) != -1)
               {
                  return true;
               }
               return false;
            });
            if(Boolean(tmpArr) && tmpArr.length > 0)
            {
               tmpArr.sortOn("itemID",Array.NUMERIC | Array.DESCENDING);
               this._itemArr[i].setInfo(tmpArr);
            }
            else
            {
               this._itemArr[i].setInfo(null);
            }
            i++;
         }
      }
      
      private function onExitBtn(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你确定要中途离场吗？你将失去所有奖励！",function():void
         {
            StatManager.sendStat2014("1120雪球大作战","点击离开战场",StatManager.RUN_ACT_2015);
            SocketConnection.addCmdListener(CommandID.BATTLEROYALE_EXIT,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_EXIT,arguments.callee);
               BattleRoyaleManager.stutas = BattleRoyaleManager.ROOM_TO_ONLINE;
               MapManager.changeMap(BattleRoyaleManager.oldMapID);
               MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
            });
            SocketConnection.send(CommandID.BATTLEROYALE_EXIT);
         });
      }
      
      public function updateBlood(param1:uint, param2:uint) : void
      {
         this._bloodMC.scaleY = param1 / param2;
      }
      
      public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,this.onItemList);
         this._exitBtn.removeEventListener(MouseEvent.CLICK,this.onExitBtn);
         this._face.destroy();
         ToolTipManager.remove(this._exitBtn);
         var _loc1_:int = 0;
         while(_loc1_ < MAX_NUM)
         {
            this._itemArr[_loc1_].destroy();
            _loc1_++;
         }
      }
   }
}
