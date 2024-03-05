package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.SeerBoxIconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxFivePanel implements ISeerBoxSubPanel
   {
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var curIndex:int = 1;
      
      private var totalPage:int = 1;
      
      public function SeerBoxFivePanel()
      {
         super();
      }
      
      public function show() : void
      {
         if(!this.content)
         {
            this.isShow = true;
            return;
         }
         (this._ui["body"] as MovieClip).addChild(this.content);
         this.updateUI();
      }
      
      public function init(param1:XML, param2:MovieClip) : void
      {
         var scName:String;
         var xml:XML = param1;
         var ui:MovieClip = param2;
         this._xml = xml;
         this._ui = ui;
         scName = this._xml.@res;
         if(scName == null)
         {
            scName = "SeerBoxFivePanel";
         }
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/" + scName),function(param1:MovieClip):void
         {
            content = param1;
            content.addEventListener(MouseEvent.CLICK,onContentClick);
            totalPage = content["item_1"].totalFrames;
            CommonUI.setEnabled(content["pre"],totalPage > 1,totalPage <= 1);
            CommonUI.setEnabled(content["nex"],totalPage > 1,totalPage <= 1);
            if(isShow)
            {
               show();
            }
         });
      }
      
      private function onContentClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var productId:int = 0;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "pre":
               --this.curIndex;
               this.updateUI();
               break;
            case "nex":
               ++this.curIndex;
               this.updateUI();
               break;
            case "buy":
               index = int(e.target.parent.parent.name.split("_")[1]);
               index = (this.curIndex - 1) * 3 + index;
               productId = int(this._xml.item[index - 1].@productId);
               KTool.buyProductByCallback(productId,1,function():void
               {
                  SocketConnection.sendWithCallback(46277,function():void
                  {
                     updateUI();
                  },2,index - 1);
               });
               break;
            case "use":
               index = int(e.target.parent.parent.name.split("_")[1]);
               index = (this.curIndex - 1) * 3 + index;
               SocketConnection.sendWithCallback(46277,function():void
               {
                  updateUI();
               },1,index - 1);
               SeerBoxIconController.update();
         }
      }
      
      private function updateUI() : void
      {
         var i:int;
         if(this.curIndex < 1)
         {
            this.curIndex = 1;
         }
         if(this.curIndex > this.totalPage)
         {
            this.curIndex = this.totalPage;
         }
         i = 1;
         while(i <= 3)
         {
            this.content["item_" + i].gotoAndStop(this.curIndex);
            i++;
         }
         this.content["page"].text = this.curIndex + "/" + this.totalPage;
         KTool.getMultiValue([4507,4509,4510],function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc4_:MovieClip = null;
            var _loc2_:int = 1;
            while(_loc2_ <= 3)
            {
               _loc3_ = (curIndex - 1) * 3 + _loc2_;
               content["item_" + _loc2_].gotoAndStop(curIndex);
               if((_loc4_ = content["item_" + _loc2_]["mc"]) != null)
               {
                  _loc4_.gotoAndStop(4);
                  if(param1[0] == _loc3_ - 1)
                  {
                     _loc4_.gotoAndStop(3);
                  }
                  else if(KTool.getBit(param1[1],_loc3_ - 1) == 1)
                  {
                     _loc4_.gotoAndStop(1);
                  }
                  else if(_loc3_ == 1 || _loc3_ == 2)
                  {
                     _loc4_.gotoAndStop(1);
                  }
                  else
                  {
                     _loc4_.gotoAndStop(2);
                  }
               }
               _loc2_++;
            }
         });
      }
      
      public function get dotNum() : int
      {
         return this._xml.@updateNum;
      }
      
      public function hide() : void
      {
         if(this.content != null && this.content.parent != null)
         {
            this.content.parent.removeChild(this.content);
         }
      }
      
      public function destroy() : void
      {
         this.hide();
         if(!this.content)
         {
            this.content.removeEventListener(MouseEvent.CLICK,this.onContentClick);
         }
         this._xml = null;
         this._ui = null;
         this.content = null;
      }
   }
}
