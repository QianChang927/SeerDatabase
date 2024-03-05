package com.robot.core.ui.chat
{
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class PchatItemRender extends Sprite
   {
       
      
      private var item:MovieClip;
      
      private var _obj:Object;
      
      public function PchatItemRender()
      {
         super();
      }
      
      public function dataChanged(param1:Object) : void
      {
         this._obj = param1;
         if(!this.item)
         {
            this.item = UIManager.getMovieClip("pchatItem");
            addChild(this.item);
            this.item.addEventListener(MouseEvent.CLICK,this.clickHandle);
         }
      }
      
      public function set select(param1:Boolean) : void
      {
         if(this.item)
         {
            this.item.gotoAndStop(param1 ? 2 : 1);
            this.item["txt"].text = this.obj["name"];
            (this.item["txt"] as TextField).mouseEnabled = false;
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "btn":
               EventManager.dispatchEvent(new DynamicEvent(ChatManager.PCHAT_NAME_CLICK,this.obj));
         }
      }
      
      public function get obj() : Object
      {
         return this._obj;
      }
      
      public function destroy() : void
      {
         if(this.item)
         {
            this.item.removeEventListener(MouseEvent.CLICK,this.clickHandle);
            this.item.parent.removeChild(this.item);
            this.item = null;
         }
      }
   }
}
