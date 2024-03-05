package com.robot.app.task.petstory.app.visit
{
   import com.robot.app.task.petstory.evt.ItemSelectEvent;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   
   public class AddPetBtn extends AbstractCell
   {
       
      
      public function AddPetBtn(param1:ApplicationDomain, param2:Object = null)
      {
         super(param1,param2);
         _app = param1;
         _mc = new (_app.getDefinition("AddPetMC") as Class)() as MovieClip;
         _mc.mouseChildren = false;
         _mc.buttonMode = true;
         _mc.addEventListener(MouseEvent.CLICK,this.onMouseAdd);
         this.addChild(_mc);
      }
      
      private function onMouseAdd(param1:MouseEvent) : void
      {
         this.dispatchEvent(new ItemSelectEvent(ItemSelectEvent.SELECT_ITEM));
      }
   }
}
