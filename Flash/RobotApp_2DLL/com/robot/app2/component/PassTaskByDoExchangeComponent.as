package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.mode.components.EventComponent;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   
   public class PassTaskByDoExchangeComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      private var _preCondition:Function;
      
      public function PassTaskByDoExchangeComponent(param1:InteractiveObject, param2:Object, param3:Function = null, param4:Function = null, param5:Boolean = false)
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
            KTool.doExchange(this._obj.exchangeID,function():void
            {
               disParent.mouseChildren = disParent.mouseEnabled = true;
               if(_func != null)
               {
                  _func();
               }
            });
         }
         else
         {
            KTool.buyProductByCallback(this._obj.pid,1,function():void
            {
               KTool.doExchange(_obj.exchangeID,function():void
               {
                  disParent.mouseChildren = disParent.mouseEnabled = true;
                  if(_func != null)
                  {
                     _func();
                  }
               });
            },null,function():void
            {
               disParent.mouseChildren = disParent.mouseEnabled = true;
            });
         }
      }
   }
}
