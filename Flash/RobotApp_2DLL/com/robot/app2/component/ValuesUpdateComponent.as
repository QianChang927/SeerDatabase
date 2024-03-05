package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.mode.components.IComponent;
   import flash.utils.Dictionary;
   
   public class ValuesUpdateComponent implements IComponent
   {
       
      
      private var _forverOrDailyValueIds:Array;
      
      private var _forverOrDailyValueIdsByDB:Array;
      
      private var _bitValueIds:Array;
      
      private var _itemIds:Array;
      
      private var _playerInfos:Array;
      
      private var _forverOrDailyValues:Dictionary;
      
      private var _bitValues:Dictionary;
      
      private var _itemNumValues:Dictionary;
      
      private var _playerInfoValues:Dictionary;
      
      private var _onUpdate:Function;
      
      public function ValuesUpdateComponent()
      {
         this._forverOrDailyValueIds = [];
         this._forverOrDailyValueIdsByDB = [];
         this._bitValueIds = [];
         this._itemIds = [];
         this._playerInfos = [];
         this._forverOrDailyValues = new Dictionary();
         this._bitValues = new Dictionary();
         this._itemNumValues = new Dictionary();
         this._playerInfoValues = new Dictionary();
         super();
      }
      
      public function set onUpdate(param1:Function) : void
      {
         this._onUpdate = param1;
      }
      
      public function set forverOrDailyValueIds(param1:Array) : void
      {
         this._forverOrDailyValueIds = param1;
      }
      
      public function set forverOrDailyValueIdsByDB(param1:Array) : void
      {
         this._forverOrDailyValueIdsByDB = param1;
      }
      
      public function set bitSetValueIds(param1:Array) : void
      {
         this._bitValueIds = param1;
      }
      
      public function set itemIds(param1:Array) : void
      {
         this._itemIds = param1;
      }
      
      public function set playerInfos(param1:Array) : void
      {
         this._playerInfos = param1;
      }
      
      public function updateValues(param1:* = null) : void
      {
         var callBack:* = param1;
         KTool.getMultiValue(this._forverOrDailyValueIds,function(param1:Array):void
         {
            var values0:Array = param1;
            KTool.getMultiValueByDB(_forverOrDailyValueIdsByDB,function(param1:Array):void
            {
               var valuesFormDB:Array = param1;
               KTool.getBitSet(_bitValueIds,function(param1:Array):void
               {
                  var values1:Array = param1;
                  KTool.getPlayerInfo(_playerInfos,function(param1:Array):void
                  {
                     var values2:Array = param1;
                     ItemManager.updateItems(_itemIds,function():void
                     {
                        _forverOrDailyValues = new Dictionary();
                        _bitValues = new Dictionary();
                        _playerInfoValues = new Dictionary();
                        catchValues(_forverOrDailyValueIds,values0,_forverOrDailyValues);
                        catchValues(_forverOrDailyValueIdsByDB,valuesFormDB,_forverOrDailyValues);
                        catchValues(_bitValueIds,values1,_bitValues);
                        catchValues(_playerInfos,values2,_playerInfoValues);
                        var _loc1_:Array = [];
                        var _loc2_:int = 0;
                        while(_loc2_ < _itemIds.length)
                        {
                           _loc1_.push(ItemManager.getNumByID(_itemIds[_loc2_]));
                           _loc2_++;
                        }
                        catchValues(_itemIds,_loc1_,_itemNumValues);
                        if(null != callBack && callBack is Function)
                        {
                           callBack();
                        }
                        if(_onUpdate != null)
                        {
                           _onUpdate();
                        }
                     });
                  });
               });
            });
         });
      }
      
      public function getForverOrDailyValue(param1:int) : int
      {
         return this._forverOrDailyValues[param1];
      }
      
      public function getBitValue(param1:int) : int
      {
         return this._bitValues[param1];
      }
      
      public function getItemNum(param1:int) : int
      {
         return this._itemNumValues[param1];
      }
      
      private function catchValues(param1:Array, param2:Array, param3:Dictionary) : void
      {
         var _loc4_:int = 0;
         while(_loc4_ < param1.length)
         {
            if(param3 != null && param2 != null && param1 != null)
            {
               param3[param1[_loc4_]] = param2[_loc4_];
            }
            _loc4_++;
         }
      }
      
      public function destroy() : void
      {
         this._forverOrDailyValueIds = this._bitValueIds = null;
         this._forverOrDailyValues = this._bitValues = null;
         this._itemNumValues = null;
         this._itemIds = null;
         this._playerInfos = null;
         this._playerInfoValues = null;
      }
   }
}
