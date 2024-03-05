package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   
   public class PassTaskBySendSocketComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      private var _preCondition:Function;
      
      public function PassTaskBySendSocketComponent(param1:InteractiveObject, param2:Object, param3:Function = null, param4:Function = null, param5:Boolean = false)
      {
         super();
         this._obj = param2;
         this._func = param3;
         this._preCondition = param4;
         if(param1 == null)
         {
            throw new Error("交互对象不能为空！");
         }
         if(param5)
         {
            super.addClickEvent(param1,this.onPassWithReturnEvent);
         }
         else
         {
            super.addClickEvent(param1,this.onPass);
         }
      }
      
      public function setObj(param1:Object) : void
      {
         this._obj = param1;
      }
      
      private function onPassWithReturnEvent(param1:MouseEvent) : void
      {
         var disParent:DisplayObjectContainer = null;
         var e:MouseEvent = param1;
         disParent = e.currentTarget.parent.parent as DisplayObjectContainer;
         if(this._preCondition != null)
         {
            this._preCondition(function():void
            {
               pass(disParent);
            },e);
         }
         else
         {
            this.pass(disParent);
         }
      }
      
      private function onPass(param1:MouseEvent) : void
      {
         var disParent:DisplayObjectContainer = null;
         var e:MouseEvent = param1;
         disParent = e.currentTarget.parent.parent as DisplayObjectContainer;
         if(this._preCondition != null)
         {
            this._preCondition(function():void
            {
               pass(disParent);
            });
         }
         else
         {
            this.pass(disParent);
         }
      }
      
      private function pass(param1:DisplayObjectContainer) : void
      {
         var disParent:DisplayObjectContainer = param1;
         disParent.mouseChildren = disParent.mouseEnabled = false;
         if(this._obj.pid <= 0)
         {
            SocketConnection.sendWithCallback2(this._obj.cmdId,function(param1:SocketEvent):void
            {
               disParent.mouseChildren = disParent.mouseEnabled = true;
               if(_func != null)
               {
                  _func();
               }
            },this._obj.sendArgs,function(param1:SocketErrorEvent):void
            {
               disParent.mouseChildren = disParent.mouseEnabled = true;
            });
         }
         else
         {
            KTool.buyProductByCallback(this._obj.pid,1,function():void
            {
               SocketConnection.sendWithCallback2(_obj.cmdId,function(param1:SocketEvent):void
               {
                  disParent.mouseChildren = disParent.mouseEnabled = true;
                  if(_func != null)
                  {
                     _func();
                  }
               },_obj.sendArgs,function(param1:SocketErrorEvent):void
               {
                  disParent.mouseChildren = disParent.mouseEnabled = true;
               });
            },null,function():void
            {
               disParent.mouseChildren = disParent.mouseEnabled = true;
            });
         }
      }
   }
}
