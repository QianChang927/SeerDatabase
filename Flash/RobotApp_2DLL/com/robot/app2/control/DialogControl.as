package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.config.xml.DialogXMLInfo;
   import com.robot.core.config.xmlInfo.DialogInfo;
   import com.robot.core.npc.NpcDialog;
   
   public class DialogControl
   {
      
      private static var _dofunctionIndexArr:Array;
      
      private static var _dofunctionArr:Array;
      
      private static var _num:int;
      
      private static var _callFunction:Function;
       
      
      public function DialogControl()
      {
         super();
      }
      
      public static function showAllDilogs(param1:int, param2:int = 1, param3:Array = null, param4:Array = null) : Promise
      {
         var deferred:Deferred = null;
         var acId:int = param1;
         var numId:int = param2;
         var dofunctionIndexArr:Array = param3;
         var dofunctionArr:Array = param4;
         deferred = new Deferred();
         _dofunctionIndexArr = dofunctionIndexArr;
         _dofunctionArr = dofunctionArr;
         var arr:Array = DialogXMLInfo.getDialogByAcId(acId,numId);
         _num = 0;
         dialog(arr,function(param1:int):void
         {
            deferred.resolve(param1);
            _callFunction = null;
            _dofunctionIndexArr = null;
            _dofunctionArr = null;
         });
         return deferred.promise;
      }
      
      public static function dialog(param1:Array, param2:Function = null) : void
      {
         var info:DialogInfo;
         var questionArr:Array;
         var index:int = 0;
         var arr:Array = param1;
         var callFunction:Function = param2;
         if(callFunction != null)
         {
            _callFunction = callFunction;
         }
         info = arr[_num] as DialogInfo;
         if(_dofunctionIndexArr != null)
         {
            index = _dofunctionIndexArr.indexOf(_num);
            if(index >= 0)
            {
               if(_dofunctionArr && _dofunctionArr[index] != null && _dofunctionArr[index] != undefined)
               {
                  _dofunctionArr[index]();
               }
            }
         }
         questionArr = info.questionArr.split("/");
         NpcDialog.show(info.npcID,[info.dialogArr],questionArr,[function():void
         {
            if(_num < arr.length - 1)
            {
               ++_num;
               dialog(arr);
            }
            else
            {
               _callFunction(1);
            }
         },function():void
         {
            if(_num < arr.length - 1)
            {
               ++_num;
               dialog(arr);
            }
            else
            {
               _callFunction(2);
            }
         },function():void
         {
            if(_num < arr.length - 1)
            {
               ++_num;
               dialog(arr);
            }
            else
            {
               _callFunction(3);
            }
         },function():void
         {
            if(_num < arr.length - 1)
            {
               ++_num;
               dialog(arr);
            }
            else
            {
               _callFunction(4);
            }
         }],false,null,true);
      }
      
      public static function showSingleDilog(param1:int, param2:int, param3:int = 1) : Promise
      {
         var deferred:Deferred = null;
         var acId:int = param1;
         var numId:int = param2;
         var index:int = param3;
         _num = 0;
         deferred = new Deferred();
         var arr:Array = DialogXMLInfo.getDialogByAcId(acId,numId);
         dialog([arr[index - 1]],function(param1:int):void
         {
            deferred.resolve(param1);
         });
         return deferred.promise;
      }
   }
}
