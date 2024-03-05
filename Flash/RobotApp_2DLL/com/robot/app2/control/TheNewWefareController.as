package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.CommandID;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.BitUtil;
   
   public class TheNewWefareController
   {
      
      private static var _isNew:Boolean;
       
      
      public function TheNewWefareController()
      {
         super();
      }
      
      public static function checkTitle(param1:Function = null) : void
      {
         var arr:Array = null;
         var fun:Function = param1;
         arr = [];
         KTool.getBitSet([14452,1601,1602],function(param1:Array):void
         {
            var date1:Date;
            var date2:Date = null;
            var a:Array = param1;
            if(!a[0])
            {
               arr.push(1);
            }
            date1 = new Date(MainManager.actorInfo.regTime * 1000);
            date2 = new Date(MainManager.actorInfo.regTime * 1000 + 30 * 24 * 3600 * 1000);
            KTool.getMultiValue([3524,3501],function(param1:Array):void
            {
               var value1:uint;
               var value2:uint;
               var value3:uint;
               var value4:uint;
               var vip:uint = 0;
               var vipStartTime:uint = 0;
               var vipEndTime:uint = 0;
               var va:Array = param1;
               var bl:Boolean = false;
               var i:int = 0;
               while(i < 21)
               {
                  if(BitUtil.getBit(va[0],i) == 0)
                  {
                     bl = true;
                     break;
                  }
                  i++;
               }
               value1 = uint(KTool.getByte(va[1],0));
               value2 = uint(KTool.getByte(va[1],1));
               value3 = uint(KTool.getByte(va[1],2));
               value4 = uint(KTool.getByte(va[1],3));
               if(date2.time > SystemTimerManager.sysBJDate.time)
               {
                  if(value1 + value2 + value3 + value4 != 12)
                  {
                     arr.push(2);
                  }
                  if(bl)
                  {
                     arr.push(4);
                  }
               }
               SocketConnection.sendByQueue(CommandID.VIP_INFO,[],function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  vip = _loc2_.readUnsignedInt();
                  vipStartTime = _loc2_.readUnsignedInt();
                  vipEndTime = _loc2_.readUnsignedInt();
                  var _loc3_:Date = new Date(vipStartTime * 1000);
                  var _loc4_:Date = new Date(2014,7,13);
                  if(vip == 1 && _loc3_.time > _loc4_.time || !MainManager.actorInfo.isVip && !MainManager.actorInfo.viped)
                  {
                     if(a[1] * a[2] == 0)
                     {
                        arr.push(3);
                     }
                  }
                  if(NewSeerVouchersController.discountDayLeft > 0)
                  {
                     arr.push(5);
                  }
                  if(fun != null)
                  {
                     fun(arr);
                  }
               });
            });
         });
      }
      
      private static function checkNoviceSummer(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([5898,5902],function(param1:Array):void
         {
            if(param1[0] == 1 && param1[1] + 30 * 86400 > SystemTimerManager.time)
            {
               _isNew = true;
            }
            if(null != fun)
            {
               fun();
            }
         });
      }
      
      public static function initIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         checkNoviceSummer(function():void
         {
            checkTitle(function(param1:Array):void
            {
               var arr:Array = param1;
               if(!_isNew && arr.length == 0)
               {
                  IconController.hideIcon("newWelfare_icon");
               }
               KTool.getBitSet([17776],function(param1:Array):void
               {
                  if(Boolean(NewSeerTaskController.isNewVersionSeer2016) && param1[0] == 0)
                  {
                     IconController.hideIcon("newWelfare_icon");
                  }
               });
            });
         });
      }
      
      public static function onIconClick(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         checkNoviceSummer(function():void
         {
            if(_isNew)
            {
               ModuleManager.showAppModule("NoviceSummerWalfarePanel");
            }
            else
            {
               ModuleManager.showAppModule("TheNewWelfarePanel");
            }
         });
      }
   }
}
