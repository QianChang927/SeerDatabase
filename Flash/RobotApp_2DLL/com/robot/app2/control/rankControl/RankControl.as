package com.robot.app2.control.rankControl
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   
   public class RankControl
   {
      
      public static const TYPE_DAILY:int = 1;
      
      public static const TYPE_WEEKLY:int = 2;
      
      public static const TYPE_MONTHY:int = 3;
       
      
      private var _itemViewList:Array;
      
      private var rankKey:uint;
      
      private var _periodIdCatch:Object;
      
      private var _catchlist:HashMap;
      
      private var _catchRank:Object;
      
      private var _catchMaxPage:Object;
      
      public var getListCommandId:int = 9506;
      
      public function RankControl()
      {
         this._periodIdCatch = {};
         this._catchlist = new HashMap();
         this._catchRank = {};
         this._catchMaxPage = {};
         super();
      }
      
      public function getRankList(param1:int, param2:int, param3:int, param4:int, param5:Function) : void
      {
         var itemList:Array = null;
         var startId:int = 0;
         var periodList:Array = null;
         var i:int = 0;
         var rankid:int = param1;
         var periodId:int = param2;
         var pageSize:int = param3;
         var page:int = param4;
         var fun:Function = param5;
         itemList = [];
         startId = page * pageSize;
         var endId:int = (page + 1) * pageSize - 1;
         var rankListMap:HashMap = this._catchlist.getValue(rankid);
         if(null == rankListMap)
         {
            rankListMap = new HashMap();
            this._catchlist.add(rankid,rankListMap);
         }
         periodList = rankListMap.getValue(periodId);
         if(null == periodList)
         {
            periodList = [];
            rankListMap.add(periodId,periodList);
         }
         if(periodList[startId] != null)
         {
            i = startId;
            while(i <= endId)
            {
               itemList.push(periodList[i]);
               i++;
            }
            fun(itemList);
            return;
         }
         SocketConnection.sendWithCallback(this.getListCommandId,function(param1:*):void
         {
            var _loc5_:RankItemVo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = startId;
            while(_loc4_ < startId + _loc3_)
            {
               _loc5_ = new RankItemVo();
               if(getListCommandId == CommandID.PETWAR_GET_RANK_LIST)
               {
                  _loc5_.id = _loc2_.readUnsignedInt();
                  _loc5_.score = _loc2_.readUnsignedInt();
                  _loc5_.rank = _loc2_.readUnsignedInt();
                  _loc5_.nick = _loc2_.readUTFBytes(16);
               }
               else
               {
                  _loc5_.id = _loc2_.readUnsignedInt();
                  _loc5_.score = _loc2_.readUnsignedInt();
                  _loc5_.nick = _loc2_.readUTFBytes(16);
                  _loc5_.rank = _loc4_;
               }
               periodList[_loc4_] = _loc5_;
               _loc4_++;
            }
            if(_loc3_ == 0)
            {
               fun(itemList);
               return;
            }
            getRankList(rankid,periodId,pageSize,page,fun);
         },rankid,periodId,startId,endId);
      }
      
      public function getMyRank(param1:int, param2:int, param3:Function) : void
      {
         var rankidObj:Object = null;
         var myRank:int = 0;
         var rankid:int = param1;
         var periodId:int = param2;
         var fun:Function = param3;
         rankidObj = this._catchRank[rankid];
         rankidObj = null == rankidObj ? {} : rankidObj;
         this._catchRank[rankid] = rankidObj;
         myRank = int(rankidObj[periodId]);
         if(0 != myRank)
         {
            fun(myRank);
            return;
         }
         SocketConnection.sendWithCallback(CommandID.PETWAR_GET_USER_RANK,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            myRank = _loc2_.readUnsignedInt();
            rankidObj[periodId] = myRank;
            fun(myRank);
         },rankid,periodId,1);
      }
      
      public function getListLength(param1:int, param2:int, param3:Function) : void
      {
         var rankidObj:Object = null;
         var len:int = 0;
         var rankid:int = param1;
         var periodId:int = param2;
         var fun:Function = param3;
         rankidObj = this._catchMaxPage[rankid];
         rankidObj = null == rankidObj ? {} : rankidObj;
         this._catchMaxPage[rankid] = rankidObj;
         len = int(rankidObj[periodId]);
         if(0 != len)
         {
            fun(len);
            return;
         }
         SocketConnection.sendWithCallback(CommandID.PETWAR_GET_RANK_LENGTH,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            len = _loc2_.readUnsignedInt();
            rankidObj[periodId] = len;
            fun(len);
         },rankid,periodId);
      }
      
      public function getPeriodId(param1:int, param2:int, param3:Function) : void
      {
         var sysDate:Date = null;
         var timeStamp:int = 0;
         var allMon:int = 0;
         var index:int = param1;
         var type:int = param2;
         var fun:Function = param3;
         sysDate = SystemTimerManager.sysDate;
         var keyDate:Date = new Date(sysDate.fullYear,sysDate.month,sysDate.date,0,0,0,0);
         timeStamp = keyDate.time / 1000;
         timeStamp -= 24 * 60 * 60;
         switch(type)
         {
            case TYPE_DAILY:
               timeStamp -= index * 24 * 60 * 60;
               break;
            case TYPE_WEEKLY:
               timeStamp -= index * 24 * 60 * 60 * 7;
               break;
            case TYPE_MONTHY:
               allMon = sysDate.fullYear * 12 + sysDate.month - index;
               keyDate = new Date(Math.floor(allMon / 12),allMon % 12,1,0,0,0,0);
               timeStamp = keyDate.time / 1000;
         }
         if(null != this._periodIdCatch[timeStamp])
         {
            fun(this._periodIdCatch[timeStamp][type]);
            return;
         }
         SocketConnection.sendWithCallback(CommandID.BATTLE_FOR_TERRITORY_GET_RANK_KEY,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:Object = {};
            _loc3_[TYPE_DAILY] = _loc2_.readUnsignedInt();
            _loc3_[TYPE_WEEKLY] = _loc2_.readUnsignedInt();
            _loc3_[TYPE_MONTHY] = _loc2_.readUnsignedInt();
            _periodIdCatch[timeStamp] = _loc3_;
            getPeriodId(index,type,fun);
         },timeStamp);
      }
   }
}
