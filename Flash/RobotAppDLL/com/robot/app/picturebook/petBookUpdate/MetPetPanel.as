package com.robot.app.picturebook.petBookUpdate
{
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MetPetPanel extends Sprite
   {
       
      
      private var mc:MovieClip;
      
      private var closeBtn:SimpleButton;
      
      private var bookBtn:SimpleButton;
      
      private var arr:Array;
      
      public function MetPetPanel(param1:Array)
      {
         this.arr = [];
         super();
         this.arr = param1.slice();
         this.mc = UIManager.getMovieClip("ui_pet_book_update");
         addChild(this.mc);
         this.mc["mc"].gotoAndStop(param1.length);
         this.closeBtn = this.mc["closeBtn"];
         this.closeBtn.addEventListener(MouseEvent.CLICK,this.closeHandler);
         this.bookBtn = this.mc["bookBtn"];
         this.bookBtn.addEventListener(MouseEvent.CLICK,this.showBook);
      }
      
      private function closeHandler(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this);
         this.closeBtn.removeEventListener(MouseEvent.CLICK,this.closeHandler);
         this.bookBtn.removeEventListener(MouseEvent.CLICK,this.showBook);
         this.mc = null;
         this.closeBtn = null;
         this.bookBtn = null;
      }
      
      private function showBook(param1:MouseEvent) : void
      {
         this.closeHandler(null);
         PictureBookController.show(this.arr);
         SocketConnection.send(1022,86053205);
      }
   }
}
