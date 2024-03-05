package com.robot.core.controller
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import com.robot.core.utils.TextFormatUtil;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class GetPetController
   {
      
      public static var _queue:Array = [];
      
      public static var isExe:Boolean = false;
       
      
      public function GetPetController()
      {
         super();
      }
      
      public static function getPet(param1:uint, param2:uint, param3:Function = null, param4:Boolean = true) : void
      {
         _queue.push({
            "monID":param1,
            "captureTm":param2,
            "func":param3,
            "isAlart":param4
         });
         if(_queue.length == 1 && !isExe)
         {
            checkContainsMons(_queue[0].monID,_queue[0].captureTm,_queue[0].func,_queue[0].isAlart);
         }
      }
      
      public static function checkContainsMons(param1:uint, param2:uint, param3:Function = null, param4:Boolean = true) : void
      {
         var _loc5_:uint;
         if((_loc5_ = _queue.length) != 0)
         {
            if(!isExe)
            {
               isExe = true;
               getPetContains(param1,param2,param3,param4);
            }
         }
      }
      
      private static function checkNext() : void
      {
         isExe = false;
         _queue.shift();
         if(_queue.length != 0)
         {
            checkContainsMons(_queue[0].monID,_queue[0].captureTm,_queue[0].func,_queue[0].isAlart);
         }
      }
      
      public static function getPetContains(param1:uint, param2:uint, param3:Function = null, param4:Boolean = true) : void
      {
         var monID:uint = param1;
         var captureTm:uint = param2;
         var func:Function = param3;
         var isAlart:Boolean = param4;
         var len:uint = PetManager.length;
         EventManager.dispatchEvent(new DynamicEvent("newPet_get_nocitce",monID));
         if(!PetManager.isBagFull || !PetManager.isSecondBagFull)
         {
            PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
            {
               var petInfo:PetInfo = null;
               var e:PetEvent = param1;
               PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
               if(isAlart)
               {
                  if(!NewSeerTaskController.isNewSeer)
                  {
                     petInfo = PetManager.getPetInfo(captureTm);
                     if(petInfo != null)
                     {
                        PetInBagAlert.show(monID,TextFormatUtil.getRedTxt(PetXMLInfo.getName(monID)) + "已经放入了你的精灵背包！",null,function():void
                        {
                           ShowNewPetController.openNewPetModule(petInfo,0);
                        });
                     }
                     if(null != func)
                     {
                        func();
                     }
                  }
                  checkNext();
               }
               else
               {
                  if(func != null)
                  {
                     func();
                  }
                  checkNext();
               }
            });
            if(!PetManager.isBagFull)
            {
               PetManager.setIn(captureTm,1);
            }
            else
            {
               PetManager.storageToSecondBag(captureTm);
            }
         }
         else if(isAlart)
         {
            if(monID == 639 || monID == 313 || monID == 1537 || monID == 2164 || monID == 310 || monID == 328 || monID == 330 || monID == 325 || monID == 319 || monID == 316 || monID == 322 || monID == 427 || monID == 849 || monID == 1448 || monID == 1749)
            {
               PetManager.addStorage(monID,captureTm,0,function(param1:*):void
               {
                  checkNext();
                  if(null != func)
                  {
                     func();
                  }
               });
            }
            else if(!NewSeerTaskController.isNewSeer)
            {
               PetManager.addStorage(monID,captureTm,0,function(param1:*):void
               {
                  var info:* = param1;
                  if(info != null)
                  {
                     PetInStorageAlert.show(monID,TextFormatUtil.getRedTxt(PetXMLInfo.getName(monID)) + "已经放入了你的精灵仓库！",null,function():void
                     {
                        ShowNewPetController.openNewPetModule(info as PetInfo,1);
                     });
                     checkNext();
                  }
                  if(null != func)
                  {
                     func();
                  }
               });
            }
            else
            {
               PetManager.addStorage(monID,captureTm,0,function():void
               {
                  checkNext();
               });
            }
         }
         else
         {
            PetManager.addStorage(monID,captureTm,0,function(param1:*):void
            {
               checkNext();
               if(func != null)
               {
                  func();
               }
            });
         }
      }
   }
}
