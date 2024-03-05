package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.info.EscapedEvilShadowInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class EscapedEvilShadowData
   {
      
      private static var _info:EscapedEvilShadowInfo;
      
      private static var _alertArr:Array;
      
      private static var _taskEventArr:Array;
       
      
      public function EscapedEvilShadowData()
      {
         super();
      }
      
      public static function startGame() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41293,[1,0]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:EscapedEvilShadowInfo = new EscapedEvilShadowInfo(_loc2_);
            setCurInfo(_loc3_);
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function goonGame() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41293,[4,1]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:EscapedEvilShadowInfo = new EscapedEvilShadowInfo(_loc2_);
            setCurInfo(_loc3_);
            deferred.resolve(1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getCurLvState(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var lv:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41293,[1,lv]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:EscapedEvilShadowInfo = new EscapedEvilShadowInfo(_loc2_);
            setCurInfo(_loc3_);
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function clickGird(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var girdIndex:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41293,[2,girdIndex]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:EscapedEvilShadowInfo = new EscapedEvilShadowInfo(_loc2_);
            setCurInfo(_loc3_);
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function choice(param1:int, param2:int = 0) : Promise
      {
         var deferred:Deferred = null;
         var index:int = param1;
         var eventType:int = param2;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41293,[3,index]).then(function(param1:SocketEvent):void
         {
            var _loc2_:EscapedEvilShadowInfo = null;
            var _loc3_:ByteArray = null;
            if(eventType == 3 || eventType == 5)
            {
               _loc3_ = param1.data as ByteArray;
               _loc3_.position = 0;
               _loc2_ = new EscapedEvilShadowInfo(_loc3_);
               setCurInfo(_loc2_);
            }
            deferred.resolve(_loc2_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function overGame() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41294,[3,1]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            deferred.resolve(1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function setCurInfo(param1:EscapedEvilShadowInfo) : void
      {
         _info = param1;
      }
      
      public static function get curInfo() : EscapedEvilShadowInfo
      {
         return _info;
      }
      
      public static function get alertArr() : Array
      {
         return _alertArr;
      }
      
      public static function set alertArr(param1:Array) : void
      {
         _alertArr = param1;
      }
      
      public static function get taskEventArr() : Array
      {
         return _taskEventArr;
      }
      
      public static function set taskEventArr(param1:Array) : void
      {
         _taskEventArr = param1;
      }
      
      public static function showOverDialog(param1:Function) : void
      {
         var fun:Function = param1;
         NpcDialog.show(5638,[" 事情这么快就办好了？还挺迅速的嘛，不错不错！"],["..."],[function():void
         {
            NpcDialog.show(4035,["现在可以告诉我出去的方法了吗？"],["..."],[function():void
            {
               NpcDialog.show(5638,["咦？奇怪，我明明说的是“一些”小忙。你不会觉得今天这件小事可以称为“一些”吧？"],["你！！"],[function():void
               {
                  NpcDialog.show(5638,["哎呀~我有点困了，明天再来找我吧~"],["（先知化作一阵烟，消失了）"],[function():void
                  {
                     if(fun != null)
                     {
                        fun();
                     }
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }],false,null,true);
      }
      
      public static function destroy() : void
      {
         _info = null;
         _alertArr = null;
         _taskEventArr = null;
      }
   }
}
