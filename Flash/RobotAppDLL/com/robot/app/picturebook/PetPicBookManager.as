package com.robot.app.picturebook
{
   import com.robot.app.picturebook.petBookUpdate.CatchPetPanel;
   import com.robot.app.picturebook.petBookUpdate.MetPetPanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.PetPicBookEvent;
   import com.robot.core.info.PictureBookInfo;
   import com.robot.core.info.pet.PetBargeListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class PetPicBookManager extends EventDispatcher
   {
      
      private static const Length:uint = 700;
      
      private static var totlaTime:uint;
      
      private static var curTime:uint = 0;
      
      private static var _len:uint;
      
      private static var _showMap:HashMap;
      
      public static var isReady:Boolean;
      
      private static var metArr:Array = [];
      
      public static var catchCount:uint;
      
      private static var _instance:EventDispatcher;
      
      {
         setup();
      }
      
      public function PetPicBookManager()
      {
         super();
      }
      
      private static function setup() : void
      {
         _showMap = new HashMap();
         var _loc1_:Array = PetBookXMLInfo.dataList;
         _loc1_.sort(Array.NUMERIC);
         _len = _loc1_[_loc1_.length - 1].@ID;
      }
      
      private static function onFightOver(param1:SocketEvent) : void
      {
         showMethMsg();
      }
      
      private static function onBookUpdate(param1:SocketEvent) : void
      {
         var _loc7_:Boolean = false;
         var _loc8_:uint = 0;
         var _loc9_:PictureBookInfo = null;
         var _loc10_:Boolean = false;
         var _loc11_:uint = 0;
         var _loc12_:PictureBookInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(TasksManager.getTaskStatus(87) != TasksManager.COMPLETE)
         {
            return;
         }
         if(_loc3_ >= 1032 && _loc3_ <= 1041)
         {
            return;
         }
         var _loc5_:PictureBookInfo = _showMap.getValue(_loc3_) as PictureBookInfo;
         var _loc6_:Array = PetXMLInfo.getParentIDs(_loc3_);
         if(_loc4_ == PetPicBookStatus.CATCH)
         {
            _loc7_ = false;
            for each(_loc8_ in _loc6_)
            {
               if(_loc9_ = _showMap.getValue(_loc8_) as PictureBookInfo)
               {
                  if(_loc9_.isCacth)
                  {
                     _loc7_ = true;
                     break;
                  }
               }
            }
            if(_loc7_)
            {
               return;
            }
            if(_loc5_)
            {
               if(!_loc5_.isCacth)
               {
                  showCatchMsg(_loc3_);
               }
            }
            else
            {
               showCatchMsg(_loc3_);
            }
         }
         else if(_loc4_ == PetPicBookStatus.MET)
         {
            _loc10_ = false;
            for each(_loc11_ in _loc6_)
            {
               if(_loc12_ = _showMap.getValue(_loc11_) as PictureBookInfo)
               {
                  if(_loc12_.encont > 0)
                  {
                     _loc10_ = true;
                     break;
                  }
               }
            }
            if(_loc10_)
            {
               return;
            }
            if(_loc5_)
            {
               if(_loc5_.encont == 0)
               {
                  addMetInfo(_loc3_);
               }
            }
            else
            {
               addMetInfo(_loc3_);
            }
         }
      }
      
      private static function showCatchMsg(param1:uint) : void
      {
         var _loc3_:CatchPetPanel = null;
         var _loc4_:int = 0;
         var _loc2_:PictureBookInfo = new PictureBookInfo();
         _loc2_.isCacth = true;
         _loc2_.encont = 1;
         _loc2_.id = param1;
         _showMap.add(param1,_loc2_);
         if(metArr.indexOf(param1) != -1)
         {
            _loc4_ = metArr.indexOf(param1);
            metArr.splice(_loc4_,1);
         }
         _loc3_ = new CatchPetPanel(param1);
         _loc3_.x = 228;
         _loc3_.y = 164;
         LevelManager.appLevel.addChild(_loc3_);
      }
      
      private static function addMetInfo(param1:uint) : void
      {
         var _loc2_:PictureBookInfo = new PictureBookInfo();
         _loc2_.isCacth = false;
         _loc2_.encont = 1;
         _loc2_.id = param1;
         _showMap.add(param1,_loc2_);
         if(metArr.indexOf(param1) == -1)
         {
            metArr.push(param1);
         }
      }
      
      private static function showMethMsg() : void
      {
         var _loc1_:MetPetPanel = null;
         if(metArr.length > 0)
         {
            _loc1_ = new MetPetPanel(metArr);
            _loc1_.x = 228;
            _loc1_.y = 164;
            LevelManager.topLevel.addChild(_loc1_);
            metArr = [];
         }
      }
      
      public static function get showMap() : HashMap
      {
         return _showMap;
      }
      
      private static function getListInfo(param1:uint, param2:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.PET_BARGE_LIST,onPetBarge);
         SocketConnection.send(CommandID.PET_BARGE_LIST,param1,param2);
      }
      
      public static function startGetListInfo() : void
      {
         if(_len <= Length)
         {
            totlaTime = 1;
         }
         else if(_len % Length == 0)
         {
            totlaTime = uint(_len / Length);
         }
         else
         {
            totlaTime = uint(_len / Length) + 1;
         }
         getListInfo(1,Length);
      }
      
      private static function onPetBarge(param1:SocketEvent) : void
      {
         var _loc5_:PictureBookInfo = null;
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,onPetBarge);
         var _loc2_:ByteArray = (param1.data as PetBargeListInfo).data;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         catchCount = 0;
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            if((_loc5_ = new PictureBookInfo(_loc2_)).id == 1000)
            {
               DebugTrace.show(1);
            }
            if(_loc5_.isCacth)
            {
               ++catchCount;
            }
            _showMap.add(_loc5_.id,_loc5_);
            _loc4_++;
         }
         ++curTime;
         if(curTime < totlaTime)
         {
            getListInfo(Length * curTime + 1,Length * curTime + 700);
         }
         else
         {
            dispatchEvent(new PetPicBookEvent(PetPicBookEvent.COMPLETE));
            isReady = true;
         }
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         if(hasEventListener(param1.type))
         {
            getInstance().dispatchEvent(param1);
         }
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}

class PetPicBookStatus
{
   
   public static const CATCH:uint = 1;
   
   public static const WIN:uint = 2;
   
   public static const MET:uint = 3;
    
   
   public function PetPicBookStatus()
   {
      super();
   }
}
